import { prisma } from "connection";
import {
  ICreateQuestion,
  IEditQuestion,
  IGetAllQuestionsList,
  PrismaTransactionalClient,
  QuestionStatus,
} from "./types";
import { deleteFiles } from "@/utils/delete.files";
import { processAttachmentsWithSignedUrls, generateSignedUrl } from "@/utils/s3";
import { getYouTubeVideoTitle } from "@/utils/yt.title.generator";

export const createQuestionService = async ({
  title,
  content,
  due_date,
  tag_ids,
  collaborator_type,
  collaborator_id,
  collaborator_division_id,
  id,
  role,
  attachments,
  youtube_url
}: ICreateQuestion) => {
  if (!title || !content || !due_date)
    throw { msg: "Title, content and due date are required", status: 406 };
  if (collaborator_type === "PERSONAL" && !collaborator_id)
    throw {
      msg: "Collaborator ID is required for personal assignment",
      status: 406,
    };
  if (collaborator_type === "DIVISION" && !collaborator_division_id)
    throw {
      msg: "Division ID is required for division assignment",
      status: 406,
    };
  if (!["PERSONAL", "DIVISION", "NONE"].includes(collaborator_type))
    throw { msg: "Invalid collaborator type", status: 406 };
  if (!tag_ids || !Array.isArray(tag_ids) || tag_ids.length === 0)
    throw { msg: "At least one tag is required", status: 406 };
  const isAuthorized = await prisma.user.findUnique({
    where: {
      user_id: id,
      role: {
        name: {
          in: ["admin", "creator"],
        },
      },
    },
  });
  if (!isAuthorized) throw { msg: "Unauthorized", status: 401 };
  const initialStatus: QuestionStatus =
    role === "user" ? "PENDING" : "ASSIGNED";
 

  return await prisma.$transaction(async (tx) => {
    const question = await tx.question.create({
      data: {
        title,
        content,
        due_date: new Date(due_date),
        creator_id: id,
        status: initialStatus,
        collaborator_type,
        collaborator_id:
          collaborator_type === "PERSONAL" ? collaborator_id : null,
      },
    });

    if (
      attachments &&
      attachments.attachments &&
      attachments.attachments.length > 0
    ) {
      const createdAttachments = await Promise.all(
        attachments.attachments.map((attachment: any) =>
          tx.attachment.create({
            data: {
              file_name: attachment.originalname || attachment.filename,
              file_path: attachment.location || `src/public/attachments/${attachment.filename}`,
              question_id: question.question_id,
            },
          })
        )
      );
    }

    if (youtube_url){
      const videoTitle = await getYouTubeVideoTitle(youtube_url)
      await tx.attachment.create({
        data: {
          file_name: videoTitle,
          file_path: youtube_url,
          question_id: question.question_id,
        }
      })
    }

    await Promise.all(
      tag_ids.map(async (tagId) =>
        tx.tagsOnQuestions.create({
          data: {
            question_id: question.question_id,
            tag_id: parseInt(tagId.toString()),
          },
        })
      )
    );

    if (initialStatus === "ASSIGNED") {
      if (collaborator_type === "PERSONAL" && collaborator_id) {
        await tx.notification.create({
          data: {
            content: `New question assigned to you: ${question.title}`,
            user_id: collaborator_id,
            question_id: question.question_id,
            notification_type: "QUESTION_ASSIGNED",
          },
        });
      } else if (collaborator_type === "DIVISION" && collaborator_division_id) {
        const divisionUsers = await tx.user.findMany({
          where: {
            division_id: collaborator_division_id,
          },
        });

        await Promise.all(
          divisionUsers.map((user) =>
            tx.notification.create({
              data: {
                content: `Your division has been assigned a new question: ${title}`,
                user_id: user.user_id,
                question_id: question.question_id,
                notification_type: "QUESTION_ASSIGNED",
              },
            })
          )
        );
      }
    } else if (initialStatus === "PENDING") {
      const reviewers = await tx.user.findMany({
        where: {
          role: {
            name: {
              in: ["admin", "reviewer"],
            },
          },
        },
      });

      await Promise.all(
        reviewers.map((reviewer) =>
          tx.notification.create({
            data: {
              content: `New question pending approval: ${title}`,
              user_id: reviewer.user_id,
              question_id: question.question_id,
              notification_type: "QUESTION_ASSIGNED",
            },
          })
        )
      );
    }
    const questionWithAttachments = await prisma.attachment.findMany({
      where: { question_id: question.question_id },
    });
    console.log(questionWithAttachments);
    
    const attachmentsWithSignedUrls = await processAttachmentsWithSignedUrls(questionWithAttachments || []);
    
    return {
      title: question.title,
      content: question.content,
      due_date: question.due_date,
      status: question.status,
      tag_ids: tag_ids,
      collaborator_type: question.collaborator_type,
      collaborator_id: question.collaborator_id,
      collaborator_division_id: question.collaborator_division_id,
      attachments: attachmentsWithSignedUrls,
    };
  });
};

export const getQuestionDetailsService = async ({
  question_id,
}: {
  question_id: string;
}) => {
  const questionId = Number(question_id);

  const question = await prisma.question.findUnique({
    where: {
      question_id: questionId,
      deleted_at: null,
    },
    include: {
      collaborator: true,
      creator: true,
      attachment: true,
      answers: {
        include: {
          attachment: true,
          user: {
            select: {
              user_id: true,
              username: true,
              profile_picture: true,
              division: {
                select: {
                  division_name: true,
                },
              },
            },
          },
          likes: {
            where: { deleted_at: null },
            select: { like_id: true },
          },
        },
      },
      comments: {
        orderBy: {
          created_at: 'desc'
        },
        include: {
          attachment: true,
          user: {
            select: {
              user_id: true,
              username: true,
              division: {
                select: {
                  division_name: true,
                },
              },
            },
          },
        },
      },
      tags: true,
      QuestionFeedBack: {
        select: {
          rating: true,
        },
      },
      _count: {
        select: {
          likes: {
            where: {
              deleted_at: null,
              question_id: questionId,
            },
          },
        },
      },
    },
  });
  if (!question) throw { msg: "Question not found", status: 404 };

  const formattedComment = (comments: any[]) => {
    const commentMap = new Map();
    const rootComments: any[] = [];

    comments.forEach((comment) => {
      commentMap.set(comment.comment_id, {
        ...comment,
        replies: [],
      });
    });

    comments.forEach((comment) => {
      if (comment.parent_id === null) {
        rootComments.push(commentMap.get(comment.comment_id));
      } else {
        const parentComment = commentMap.get(comment.parent_id);
        if (parentComment) {
          parentComment.replies.push(commentMap.get(comment.comment_id));
        }
      }
    });

    return rootComments;
  };

  // Process answer attachments and profile pictures 
  const answersWithSignedUrls = await Promise.all(
    question.answers.map(async (answer: any) => {
      const attachmentsWithSignedUrls = answer.attachment 
        ? await processAttachmentsWithSignedUrls(answer.attachment)
        : [];
      
      // Generate signed URL for user profile picture
      let profilePictureUrl = null;
      if (answer.user?.profile_picture) {
        try {
          profilePictureUrl = await generateSignedUrl(answer.user.profile_picture, 86400);
        } catch (error) {
          console.error('Error generating signed URL for answer user profile picture:', error);
          profilePictureUrl = null;
        }
      }
      
      return {
        ...answer,
        attachment: attachmentsWithSignedUrls,
        user: answer.user ? {
          ...answer.user,
          profile_picture: profilePictureUrl
        } : null,
        likes_count: answer.likes.length,
      };
    })
  );

  // Calculate average rating
  const averageRating = (question as any).QuestionFeedBack?.length > 0 
    ? (question as any).QuestionFeedBack.reduce((acc: number, feedback: any) => acc + feedback.rating, 0) / (question as any).QuestionFeedBack.length 
    : 0;

  // Process attachments to generate signed URLs
  const attachmentsWithSignedUrls = await processAttachmentsWithSignedUrls(question.attachment || []);
  
  // Generate signed URL for creator profile picture
  let creatorProfilePictureUrl = null;
  if (question.creator?.profile_picture) {
    try {
      creatorProfilePictureUrl = await generateSignedUrl(question.creator.profile_picture, 86400);
    } catch (error) {
      console.error('Error generating signed URL for creator profile picture:', error);
      creatorProfilePictureUrl = null;
    }
  }
  
  // Generate signed URL for collaborator profile picture  
  let collaboratorProfilePictureUrl = null;
  if (question.collaborator?.profile_picture) {
    try {
      collaboratorProfilePictureUrl = await generateSignedUrl(question.collaborator.profile_picture, 86400);
    } catch (error) {
      console.error('Error generating signed URL for collaborator profile picture:', error);
      collaboratorProfilePictureUrl = null;
    }
  }
  
  // Process comment attachments
  const commentsWithSignedUrls = await Promise.all(
    question.comments.map(async (comment: any) => ({
      ...comment,
      attachment: await processAttachmentsWithSignedUrls(comment.attachment || [])
    }))
  );

  const formattedQuestions = {
    ...question,
    creator: question.creator ? {
      ...question.creator,
      profile_picture: creatorProfilePictureUrl
    } : null,
    collaborator: question.collaborator ? {
      ...question.collaborator,
      profile_picture: collaboratorProfilePictureUrl
    } : null,
    attachment: attachmentsWithSignedUrls,
    answers: answersWithSignedUrls,
    comments: formattedComment(commentsWithSignedUrls),
    like_count: question._count,
    total_answer: question.answers.length,
    total_attachments: question.attachment.length,
    average_rating: averageRating,
  };
  return formattedQuestions;
};

export const getAllQuestionsListService = async ({
  search = "",
  sortBy = "created_at",
  sortOrder = "desc",
  page = 1,
  limit = 10,
  tags = [],
  status = "",
  filter = "all",
}: IGetAllQuestionsList) => {
  const validSortOrder = ["asc", "desc"].includes(sortOrder)
    ? sortOrder
    : "desc";
  const validSortFields = [
    "created_at",
    "title",
    "due_date",
    "status",
    "updated_at",
    "likes_count",
    "comments_count",
    "answers_count",
    "rating",
  ];
  let validSortBy = validSortFields.includes(sortBy) ? sortBy : "created_at";

  const where = {
    deleted_at: null,
  } as any;

  if (!status) {
    where.status = { notIn: ["PENDING", "REJECTED"] };
  } else {
    where.status = status;
  }

  if (search?.trim()) {
    where.OR = [
      {
        title: {
          contains: search.trim(),
          mode: "insensitive",
        }
      },
      {
        content: {
          contains: search.trim(),
          mode: "insensitive",
        }
      }
    ];
  }

  if (tags && tags.length > 0) {
    const normalizedTags = Array.isArray(tags)
      ? tags.filter((tag: string) => tag && tag.trim())
      : [tags as string].filter((tag: string) => tag && tag.trim());

    if (normalizedTags.length > 0) {
      where.tags = {
        some: {
          tag: {
            name: {
              in: normalizedTags,
            },
          },
        },
      };
    }
  }

  const skip = (page - 1) * limit;

  let orderBy: any = {};

  if (validSortBy === "likes_count") {
    orderBy = {
      likes: {
        _count: validSortOrder,
      },
    };
  } else if (validSortBy === "comments_count") {
    orderBy = {
      comments: {
        _count: validSortOrder,
      },
    };
  } else if (validSortBy === "answers_count") {
    orderBy = {
      answers: {
        _count: validSortOrder,
      },
    };
  } else if (validSortBy === "rating") {
    orderBy = {
      created_at: "desc", 
    };
  } else {
    orderBy[validSortBy] = validSortOrder;
  }

  const questions = await prisma.question.findMany({
    where,
    include: {
      creator: {
        select: {
          user_id: true,
          username: true,
          profile_picture: true,
        },
      },
      attachment: {
        select: {
          attachment_id: true,
          file_name: true,
        },
      },
      collaborator: {
        select: {
          user_id: true,
          username: true,
        },
      },
      collaborator_division: {
        select: {
          id: true,
          division_name: true,
        },
      },
      tags: {
        select: {
          tag: {
            select: {
              tag_id: true,
              name: true,
            },
          },
        },
      },
      answers: {
        take: 1,
        select: {
          answer_id: true,
          is_accepted: true,
        },
        orderBy: {
          is_accepted: "desc",
        },
      },
      _count: {
        select: {
          likes: {
            where: {
              deleted_at: null,
            },
          },
          comments: true,
          answers: true,
        },
      },
      QuestionFeedBack: {
        select: {
          rating: true,
        },
      },
    },
    orderBy: validSortBy !== "rating" ? orderBy : { created_at: "desc" },
    skip: validSortBy !== "rating" ? skip : undefined,
    take: validSortBy !== "rating" ? limit : undefined,
  });

  const total = await prisma.question.count({ where });

  let formattedQuestions = await Promise.all(
    questions.map(async (question: any) => {
      const tags = question.tags.map((t: any) => ({
        id: t.tag.tag_id,
        name: t.tag.name,
      }));

      const hasAcceptedAnswer = question.answers.some(
        (answer: any) => answer.is_accepted
      );

      const averageRating = question.QuestionFeedBack?.length > 0 
        ? question.QuestionFeedBack.reduce((acc: number, feedback: any) => acc + feedback.rating, 0) / question.QuestionFeedBack.length 
        : 0;

      let creatorProfilePictureUrl = null;
      if (question.creator?.profile_picture) {
        try {
          creatorProfilePictureUrl = await generateSignedUrl(question.creator.profile_picture, 86400);
        } catch (error) {
          console.error('Error generating signed URL for creator profile picture:', error);
          creatorProfilePictureUrl = null;
        }
      }

      return {
        id: question.question_id,
        title: question.title,
        content: question.content,
        status: question.status,
        created_at: question.created_at,
        updated_at: question.updated_at,
        due_date: question.due_date,
        is_published: question.is_published,
        creator: question.creator ? {
          ...question.creator,
          profile_picture: creatorProfilePictureUrl
        } : null,
        collaborator: question.collaborator,
        collaborator_division: question.collaborator_division,
        attachment: question.attachment,
        tags,
        likes_count: question._count.likes,
        comments_count: question._count.comments,
        answers_count: question._count.answers,
        has_accepted_answer: hasAcceptedAnswer,
        average_rating: averageRating,
      };
    })
  );

  if (validSortBy === "rating") {
    formattedQuestions = formattedQuestions
      .sort((a, b) => {
        const aRating = a.average_rating;
        const bRating = b.average_rating;
        return validSortOrder === "desc" ? bRating - aRating : aRating - bRating;
      })
      .slice(skip, skip + limit); 
  }

  return {
    data: formattedQuestions,
    pagination: {
      total,
      page,
      limit,
      totalPages: Math.ceil(total / limit),
      hasNextPage: page < Math.ceil(total / limit),
      hasPrevPage: page > 1,
    }
  };
};

export const getAllTagsService = async () => {
  const tags = await prisma.tag.findMany({ where: { deleted_at: null } });

  return tags;
};

export const createNewTagService = async ({ tagName }: { tagName: string }) => {
  const newTag = await prisma.tag.create({
    data: {
      name: tagName,
    },
  });
};

export const deleteTagService = async ({ tagId }: { tagId: number }) => {
  const id = Number(tagId);
  await prisma.tag.update({
    where: {
      tag_id: id,
    },
    data: {
      deleted_at: new Date(),
    },
  });
};

export const getAllNotificationsService = async ({
  id,
  role,
}: {
  id: number;
  role: string;
}) => {
  const notifications = await prisma.notification.findMany({
    where: {
      user_id: id,
    },
    orderBy: {
      created_at: "desc",
    },
  });

  return notifications;
};

export const createCommentService = async ({
  question_id,
  comment,
  user_id,
  attachments,
  parent_comment_id,
  answer_id,
}: {
  question_id: number;
  comment: string;
  user_id: number;
  attachments: Express.Multer.File[];
  parent_comment_id: number;
  answer_id: number;
}) => {
  if (parent_comment_id) {
    const parentComment = await prisma.comment.findUnique({
      where: { comment_id: parent_comment_id },
    });
    if (!parentComment) throw { msg: "Invalid comment", status: 406 };
  }
  const createdComment = await prisma.comment.create({
    data: {
      content: comment,
      user_id: user_id,
      parent_id: parent_comment_id ? parent_comment_id : null,
      ...(question_id
        ? { question_id: question_id }
        : { answer_id: answer_id }),
    },
  });

  if (attachments && attachments.length > 0) {
    await Promise.all(
      attachments.map(async (attachment: any) => {
        await prisma.attachment.create({
          data: {
            file_name: attachment.originalname || attachment.filename,
            file_path: attachment.location || `src/public/attachments/${attachment.filename}`,
            comment_id: createdComment.comment_id,
          },
        });
      })
    );
  }
};

export const likeQuestionService = async ({
  id,
  role,
  question_id,
  answer_id,
  like,
}: {
  id: number;
  role: string;
  question_id?: number;
  answer_id?: number;
  like: boolean;
}) => {
  const isUser = await prisma.user.findUnique({
    where: { user_id: id },
  });
  if (!isUser) throw { msg: "Invalid Credentials", status: 406 };
  if (!question_id && !answer_id)
    throw { msg: "Question or Answer ID is required", status: 406 };
  // Handle Question Like/Unlike
  if (question_id) {
    const question = await prisma.question.findUnique({
      where: { question_id },
      include: { creator: true },
    });
    if (!question) throw { msg: "Invalid Question", status: 406 };
  }

  if (answer_id) {
    const answer = await prisma.answer.findUnique({
      where: { answer_id },
      include: { user: true },
    });
    if (!answer) throw { msg: "Invalid Answer", status: 406 };
  }

  const key = question_id ? "question_id" : "answer_id";

  const existingLike = await prisma.like.findFirst({
    where: { user_id: id, [key]: question_id || answer_id },
  });

  if (existingLike) {
    // Restore like
    const deletedAt = existingLike.deleted_at ? null : new Date();
    await prisma.like.update({
      where: { like_id: existingLike.like_id },
      data: { deleted_at: deletedAt },
    });
  } else {
    await prisma.like.create({
      data: { user_id: id, [key]: question_id || answer_id },
    });
  }
};

export const getLikeStatusService = async ({
  id,
  question_id,
}: {
  id: number;
  question_id: number;
}) => {
  console.log("=== LIKE STATUS SERVICE START ===");
  console.log("Input params:", { userId: id, question_id });

  try {
    const likeStatus = await prisma.$queryRaw<
      {
        type: string;
        id: string | number;
        total_likes: bigint;
        is_liked: bigint;
      }[]
    >`
            SELECT 
                'question' as type,
                ${question_id} as id,
                COUNT(CASE WHEN l.question_id IS NOT NULL THEN 1 END) as total_likes,
                MAX(CASE WHEN l.user_id = ${id} AND l.question_id IS NOT NULL AND l.deleted_at IS NULL THEN 1 ELSE 0 END) as is_liked
            FROM likes l 
            WHERE l.question_id = ${question_id} AND l.deleted_at IS NULL

            UNION ALL
            
            SELECT 
                'answer' as type,
                a.answer_id as id,
                COUNT(l.like_id) as total_likes,
                MAX(CASE WHEN l.user_id = ${id} AND l.deleted_at IS NULL THEN 1 ELSE 0 END) as is_liked
            FROM answers a
            LEFT JOIN likes l ON a.answer_id = l.answer_id AND l.deleted_at IS NULL
            WHERE a.question_id = ${question_id} AND a.deleted_at IS NULL
            GROUP BY a.answer_id
        `;

    console.log("Raw query returned", likeStatus.length, "items");

    // Process each item
    likeStatus.forEach((item, index) => {
      console.log(`Item ${index}:`, {
        type: item.type,
        id: item.id,
        total_likes_raw: item.total_likes,
        total_likes_converted: Number(item.total_likes),
        is_liked_raw: item.is_liked,
        is_liked_converted: Number(item.is_liked),
      });
    });

    const questionLike = likeStatus.find((item) => item.type === "question");
    const answerLikes = likeStatus.filter((item) => item.type === "answer");

    console.log("Question like found:", !!questionLike);
    console.log("Answer likes found:", answerLikes.length);

    // Convert answer data with explicit logging
    const processedAnswers = answerLikes.map((answer, index) => {
      // Convert each field explicitly
      const answerId = Number(answer.id);
      const likesCount = Number(answer.total_likes);
      const isLiked = Number(answer.is_liked) === 1;

      console.log(`Processing answer ${index}:`, {
        raw_id: answer.id,
        converted_id: answerId,
        raw_likes: answer.total_likes,
        converted_likes: likesCount,
        raw_is_liked: answer.is_liked,
        converted_is_liked: isLiked,
      });

      const result = {
        answer_id: answerId,
        is_liked: isLiked,
        likes: likesCount,
      };

      console.log(`Answer ${index} final:`, result);
      return result;
    });

    const finalResult = {
      question_id: question_id,
      question_is_liked: Number(questionLike?.is_liked) === 1,
      answers: processedAnswers,
    };

    console.log("=== FINAL RESULT ===");
    console.log("Question ID:", finalResult.question_id);
    console.log("Question is liked:", finalResult.question_is_liked);
    console.log("Answers count:", finalResult.answers.length);
    console.log("Answers array:", finalResult.answers);

    return finalResult;
  } catch (error) {
    console.error("Error in getLikeStatusService:", error);
    throw error;
  }
};

export const editQuestionService = async ({
  title,
  content,
  question_id,
  tag_ids,
  due_date,
  collaborator_type,
  collaborator_id,
  attachments,
  id,
  role,
  attachmentsToDelete,
  tagsToDelete,
  collaborator_division_id,
}: IEditQuestion) => {
  await prisma.$transaction(async (tx) => {
    const questionToEdit = await tx.question.findUnique({
      where: { question_id },
      include: { attachment: true, tags: true },
    });

    if (!questionToEdit) throw { msg: "Invalid Questtion", status: 404 };
    if (questionToEdit.creator_id !== id)
      throw { msg: "You can only edit your own question", status: 403 };

    if (attachmentsToDelete && attachmentsToDelete.length > 0) {
      const attachmentsToBeDeleted = await tx.attachment.findMany({
        where: {
          question_id,
          attachment_id: { in: attachmentsToDelete },
        },
      });
      if (attachmentsToBeDeleted.length > 0)
        await deleteFiles({
          fileToDelete: {
            file: attachmentsToBeDeleted.map((attachment) => ({
              path: attachment.file_path,
            })),
          },
        });
      await tx.attachment.deleteMany({
        where: {
          attachment_id: { in: attachmentsToDelete },
          question_id,
        },
      });
    }

    if (tagsToDelete && tagsToDelete.length > 0) {
      const tagsToBeDeleted = await tx.tagsOnQuestions.findMany({
        where: {
          question_id,
          tag_id: { in: tagsToDelete },
        },
      });

      if (tagsToBeDeleted.length > 0)
        await tx.tagsOnQuestions.deleteMany({
          where: { tag_id: { in: tagsToDelete } },
        });
    }

    const updateData: any = {};

    if (title !== undefined) updateData.title = title;
    if (content !== undefined) updateData.content = content;
    if (due_date !== undefined) updateData.due_date = new Date(due_date);
    if (collaborator_type !== undefined) {
      if (collaborator_type === "PERSONAL") {
        updateData.collaborator_id = collaborator_id;
        updateData.collaborator_division_id = null;

        if (collaborator_id) {
          await tx.notification.create({
            data: {
              user_id: collaborator_id,
              notification_type: "QUESTION_ASSIGNED",
              content: `You have been assigned a new Question: ${title}`,
            },
          });
        }
      } else if (collaborator_type === "DIVISION") {
        updateData.collaborator_division_id = collaborator_division_id;
        updateData.collaborator_id = null;

        const divisionUsers = await prisma.user.findMany({
          where: {
            division_id: collaborator_division_id,
          },
        });

        await Promise.all(
          divisionUsers.map((user) =>
            tx.notification.create({
              data: {
                user_id: user.user_id,
                notification_type: "QUESTION_ASSIGNED",
                content: `Your division has been assigned a new question: ${title}`,
                question_id,
              },
            })
          )
        );
      } else {
        updateData.collaborator_id = null;
        updateData.collaborator_division_id = null;
      }
    }
    updateData.updated_at = new Date();

    console.log(updateData);

    const updatedQuestion = await tx.question.update({
      where: { question_id },
      data: updateData,
    });

    console.log(updatedQuestion);

    if (attachments.attachments.length > 0) {
      await Promise.all(
        attachments.attachments.map((attachment: any) =>
          tx.attachment.create({
            data: {
              file_name: attachment.originalname || attachment.filename,
              // Save the full S3 URL so it's directly accessible
              file_path: attachment.location || `src/public/attachments/${attachment.filename}`,
              question_id,
            },
          })
        )
      );
    }

    if (tag_ids.length > 0) {
      await Promise.all(
        tag_ids.map(async (tag_id) => {
          const exists = await tx.tagsOnQuestions.findUnique({
            where: {
              question_id_tag_id: {
                question_id,
                tag_id: Number(tag_id),
              },
            },
          });
          if (!exists) {
            await tx.tagsOnQuestions.create({
              data: {
                question_id,
                tag_id: Number(tag_id),
              },
            });
          }
        })
      );
    }
  });
  return await prisma.question.findUnique({
    where: { question_id },
    include: {
      attachment: true,
      tags: {
        include: {
          tag: true,
        },
      },
    },
  });
};

export const markNotificationAsReadService = async ({
  notificationId,
  id,
}: {
  notificationId: string;
  id: number;
}) => {
  const notification_id = Number(notificationId);
  if (!notification_id || isNaN(notification_id))
    throw { msg: "Invalid notification ID", status: 406 };
  if (!id || isNaN(id)) throw { msg: "Invalid user ID", status: 406 };
  const notification = await prisma.notification.findUnique({
    where: {
      id: notification_id,
      user_id: id,
    },
  });

  if (!notification) throw { msg: "Notification not found", status: 404 };

  return await prisma.notification.update({
    where: {
      id: notification_id,
    },
    data: {
      is_read: true,
    },
  });
};

export const markAllNotificationsAsReadService = async ({
  id,
}: {
  id: number;
}) => {
  await prisma.notification.updateMany({
    where: {
      user_id: id,
      is_read: false,
    },
    data: {
      is_read: true,
    },
  });
};

export const getCollaboratorListService = async () => {
  const collaborators = await prisma.user.findMany({
    where: {
      is_active: true,
      deleted_at: null,
      role: {
        name: {
          notIn: ["user"],
        },
      },
    },
    select: {
      user_id: true,
      username: true,
      profile_picture: true,
      division: {
        select: {
          division_name: true,
        },
      },
    },
  });
  
  return Promise.all(
    collaborators.map(async (collaborator) => {
      // Generate signed URL for profile picture
      let profilePictureUrl = null;
      if (collaborator.profile_picture) {
        try {
          profilePictureUrl = await generateSignedUrl(collaborator.profile_picture, 86400);
        } catch (error) {
          console.error('Error generating signed URL for collaborator profile picture:', error);
          profilePictureUrl = null;
        }
      }
      
      return {
        id: collaborator.user_id,
        username: collaborator.username,
        profile_picture: profilePictureUrl,
        division: collaborator.division?.division_name
          ? collaborator.division.division_name
          : null,
      };
    })
  );
};

export const getCollaboratorDivisionListService = async () => {
  return await prisma.division.findMany({
    where: {
      deleted_at: null,
    },
    select: {
      id: true,
      division_name: true,
    },
  });
};

export const saveQuestionService = async ({
  question_id,
  id,
  save,
  unsave,
}: {
  question_id: number;
  id: number;
  save: boolean;
  unsave: boolean;
}) => {
  const question = await prisma.question.findUnique({
    where: {
      question_id,
    },
  });
  if (!question) throw { msg: "Invalid question", status: 404 };

  const exsitingSavedQuestion = await prisma.savedQuestion.findFirst({
    where: {
      user_id: id,
      question_id,
    },
  });

  if (exsitingSavedQuestion) {
    if (!exsitingSavedQuestion.deleted_at) {
      await prisma.savedQuestion.update({
        where: {
          saved_question_id: exsitingSavedQuestion.saved_question_id,
        },
        data: {
          deleted_at: new Date(),
          updated_at: new Date(),
        },
      });
    } else{
      await prisma.savedQuestion.update({
        where: {
          saved_question_id: exsitingSavedQuestion.saved_question_id,
        },
        data: {
          deleted_at: null,
          updated_at: new Date(),
        }
      })
    }
  } else {
    await prisma.savedQuestion.create({
      data: {
        user_id: id,
        question_id,
      },
    });
  }

  console.log('existing save question: ', exsitingSavedQuestion)
};


export const getQuestionFeedbackService = async ({
  id,
  role,
  question_id,
}: {
  id: number;
  role: string;
  question_id: number;
}) => {
  const feedbacks = await prisma.questionFeedBack.findMany({
    where: {
      question_id,
      question: {
        creator_id: id,
        creator: {
          role: {
            name: role,
          },
        },
      },
    },
    omit: {
      user_id: true,
    },
    include: {
      user: {
        select: {
          user_id: true,
          username: true,
          first_name: true,
          last_name: true,
          profile_picture: true,
        },
      },
    },
  });
  
  return Promise.all(
    feedbacks.map(async (feedback) => {
      // Generate signed URL for user profile picture
      let profilePictureUrl = null;
      if (feedback.user?.profile_picture) {
        try {
          profilePictureUrl = await generateSignedUrl(feedback.user.profile_picture, 86400);
        } catch (error) {
          console.error('Error generating signed URL for feedback user profile picture:', error);
          profilePictureUrl = null;
        }
      }
      
      return {
        ...feedback,
        user: feedback.user ? {
          ...feedback.user,
          profile_picture: profilePictureUrl
        } : null,
      };
    })
  );
};

export const createFeedbackService = async ({
  id,
  role,
  content,
  rating,
  question_id,
}: {
  id: number;
  role: string;
  content: string;
  rating: number;
  question_id: number;
}) => {
  const creatorId = await prisma.question.findUnique({
    where: {
      question_id,
    },
    include: {
      creator: {
        select: {
          user_id: true,
        },
      },
    },
  });
  await prisma.$transaction(async (tx) => {
    const feedback = await tx.questionFeedBack.create({
      data: {
        user_id: id,
        content,
        rating,
        question_id,
      },
    });

    await tx.notification.create({
      data: {
        content: "You got a Feedback regarding to one of your question",
        notification_type: "FEEDBACK_ON_QUESTION",
        user_id: creatorId!.creator_id,
        question_id: feedback.question_id,
      },
    });
  });
};

export const getQuestionEditService = async ({
  question_id,
  id,
  role,
}: {
  question_id: number;
  id: number;
  role: string;
}) => {
  const question = await prisma.question.findUnique({
    where: {
      question_id,
      deleted_at: null,
    },
    include: {
      attachment: true,
      tags: true,
    },
  });

  if (!question || question.creator_id !== id)
    throw {
      msg: "Question not found or you are not authorized to edit this question",
      status: 404,
    };

  // Process attachments to generate signed URLs
  const attachmentsWithSignedUrls = await processAttachmentsWithSignedUrls(question.attachment || []);

  return {
    ...question,
    attachment: attachmentsWithSignedUrls,
  };
};
