import { prisma } from "connection"
import { ICreateQuestion, IGetAllQuestionsList, PrismaTransactionalClient, QuestionStatus } from "./types";

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
    attachments
}:ICreateQuestion) => {
    if(!title || !content || !due_date) throw {msg: 'Title, content and due date are required', status: 406};
    if(collaborator_type === 'PERSONAL' && !collaborator_id) throw {msg: 'Collaborator ID is required for personal assignment', status: 406};
    if(collaborator_type === 'DIVISION' && !collaborator_division_id) throw {msg: 'Division ID is required for division assignment', status: 406};
    if(!['PERSONAL', 'DIVISION', 'NONE'].includes(collaborator_type)) throw {msg: 'Invalid collaborator type', status: 406};
    if(!tag_ids || !Array.isArray(tag_ids) || tag_ids.length === 0) throw {msg: 'At least one tag is required', status: 406};
    const isAuthorized = await prisma.user.findUnique({
        where: {
            id,
            role: {
                name: {
                    in: ['admin', 'creator']
                }
            }
        }
    })
    if(!isAuthorized) throw {msg: 'Unauthorized', status: 401}
    const initialStatus: QuestionStatus = role === 'admin' ? 'ASSIGNED' : 'PENDING';
    console.log('attachments: ',attachments)
    console.log('Attachment structure received:', typeof attachments);

    return await prisma.$transaction(async (tx: PrismaTransactionalClient) => {
        const question = await tx.question.create({
            data: {
                title,
                content,
                due_date: new Date(due_date),
                creator_id: id,
                status: initialStatus,
                collaborator_type,
                collaborator_id: collaborator_type === 'PERSONAL' ? collaborator_id : null
            }
        })

        if (attachments && attachments.attachments && attachments.attachments.length > 0) {  
            const createdAttachments = await Promise.all(
                attachments.attachments.map(attachment => 
                    tx.attachment.create({
                        data: {
                            file_name: attachment.filename,
                            file_path: `src/public/attachments/${attachment.filename}`,
                            question_id: question.question_id,
                        }
                    })
                )
            );
        } 


        await Promise.all(tag_ids.map(async tagId => tx.tagsOnQuestions.create({
            data: {
                question_id: question.question_id,
                tag_id: parseInt(tagId.toString())
            }
        })))

        if (initialStatus === 'ASSIGNED') {
            if (collaborator_type === 'PERSONAL' && collaborator_id) {
                await tx.notification.create({
                    data: {
                        content: `New question assigned to you: ${question.title}`,
                        user_id: collaborator_id,
                        question_id: question.question_id,
                        notification_type: 'QUESTION_ASSIGNED'
                    }
                })
            } else if (collaborator_type === 'DIVISION' && collaborator_division_id) {
                const divisionUsers = await tx.user.findMany({
                    where: {
                        division_id: collaborator_division_id
                    }
                })

                await Promise.all(divisionUsers.map(user => tx.notification.create({
                    data: {
                        content: `Your division has been assigned a new question: ${title}`,
                        user_id: user.id,
                        question_id: question.question_id,
                        notification_type: 'QUESTION_ASSIGNED'
                    }
                })))
            } 
        } else if (initialStatus === 'PENDING') {
            const reviewers = await tx.user.findMany({
                where: {
                    role: {
                        name: {
                            in: ['admin', 'reviewer']
                        }
                    }
                }
            });
            
            await Promise.all(reviewers.map(reviewer => 
                tx.notification.create({
                    data: {
                        content: `New question pending approval: ${title}`,
                        user_id: reviewer.id,
                        question_id: question.question_id,
                        notification_type: 'QUESTION_ASSIGNED'
                    }
                })
            ));
        }
        const questionWithAttachments = await prisma.attachment.findMany({
            where: { question_id: question.question_id}
        })
        console.log(questionWithAttachments)
        return {
            title: question.title,
            content: question.content,
            due_date: question.due_date,
            status: question.status,
            tag_ids: tag_ids,
            collaborator_type: question.collaborator_type,
            collaborator_id: question.collaborator_id,
            collaborator_division_id: question.collaborator_division_id,
            attachments: questionWithAttachments || []
        };
    })
}

export const getAllQuestionsListService = async ({search = '', sortBy = 'created_at', sortOrder = 'desc', page = 1, limit = 10, tags = [], status = '', filter = 'all'}: IGetAllQuestionsList) => {
    const validSortOrder = ['asc', 'desc'].includes(sortOrder) ? sortOrder : 'desc';
    const validSortFields = ['created_at', 'title', 'due_date', 'status', 'updated_at', 'likes_count', 'comments_count', 'answers_count'];
    let validSortBy = validSortFields.includes(sortBy) ? sortBy : 'created_at';
    const offset = (page - 1) * limit;
     const where = {
        deleted_at: null,
        is_published: true
    } as any;
    
    if (!status) {
        where.status = { notIn: ['PENDING', 'REJECTED'] };
    } else {
        where.status = status;
    }
    
    if (search) {
        where.OR = [
            { title: { contains: search }  },
            { content: { contains: search } }
        ];
    }
    
    if (tags && tags.length > 0) {
        where.tags = {
            some: {
                tag: {
                    name: {
                        in: Array.isArray(tags) ? tags : [tags]
                    }
                }
            }
        };
    } 
       
    const skip = (page - 1) * limit;
    
    const questions = await prisma.question.findMany({
        where,
        include: {
            creator: {
                select: {
                    id: true,
                    username: true,
                    email: true
                }
            },
            attachment: true,
            collaborator: {
                select: {
                    id: true,
                    username: true,
                    email: true
                }
            },
            comments: true,
            collaborator_division: {
                select: {
                    id: true,
                    division_name: true
                }
            },
            tags: {
                select: {
                    tag: {
                        select: {
                            tag_id: true,
                            name: true
                        }
                    }
                }
            },
            _count: {
                select: {
                    likes: true,
                    comments: true,
                    answers: true
                }
            }
        },
        orderBy: {
            [sortBy]: sortOrder
        },
        skip,
        take: limit
    });
    
    const total = await prisma.question.count({ where });
    
    const formattedQuestions = questions.map(question => {
        const tags = question.tags.map(t => t.tag);
        
        return {
            ...question,
            tags,
            likes_count: question._count.likes,
            comments_count: question._count.comments,
            answers_count: question._count.answers,
            _count: undefined,
            attachment: question.attachment
        };
    });
    
    return {
        data: formattedQuestions,
        pagination: {
            total,
            page,
            limit,
            totalPages: Math.ceil(total / limit),
            hasNextPage: page < Math.ceil(total / limit),
            hasPrevPage: page > 1
        }
    };
};

export const getAllTagsService = async () => {
    const tags = await prisma.tag.findMany({where: {deleted_at: null}})

    return tags;
}

export const createNewTagService = async ({tagName}: {tagName: string}) => {
    const newTag = await prisma.tag.create({
        data: {
            name: tagName
        }
    })
}

export const deleteTagService = async ({tagId}: {tagId: number}) => {
    const id = Number(tagId)
    await prisma.tag.update({
        where: {
            tag_id: id
        },
        data: {
            deleted_at: new Date()
        }
    })
}

export const getAllNotificationsService = async ({id, role}:{id: number, role: string}) => {
    const notifications = await prisma.notification.findMany({
        where: {
            user_id: id
        }
    })

    return notifications;
}

export const createCommentService = async ({question_id, comment , user_id, attachments, parent_comment_id}:{question_id: number, comment: string, user_id: number, attachments: Express.Multer.File[], parent_comment_id: number}) => {
    if (parent_comment_id){
        const parentComment = await prisma.comment.findUnique({
            where: {comment_id: parent_comment_id}
        })
        if(!parentComment) throw {msg: 'Invalid comment', status: 406}
    }
    const createdComment = await prisma.comment.create({
        data: {
            content: comment,
            question_id: question_id,
            user_id: user_id,
            parent_id: parent_comment_id ? parent_comment_id : null
        }
    })

    if(attachments && attachments.length > 0) {
        await Promise.all(attachments.map(async (attachment) => {
            await prisma.attachment.create({
                data: {
                    file_name: attachment.filename,
                    file_path: attachment.path,
                    comment_id: createdComment.comment_id
                }
            })
        }))
    }
}

export const likeQuestionService = async({id, role, question_id, answer_id}:{id: number, role: string, question_id: number, answer_id: number}) => {
    const isUser = await prisma.user.findUnique({
        where: {
            id: id
        }
    })
    if(!isUser) throw {msg: 'Invalid Credentials', status: 406}
    if(question_id){
        const question = await prisma.question.findUnique({
            where: {
                question_id: question_id
            },
            include: {
                creator: true,
            }
        })
        if(!question) throw {msg: 'Invalid Question', status: 406};
        await prisma.like.create({
            data: {
                user_id: id,
                question_id: question_id
            }
        })

        await prisma.notification.create({
            data: {
                user_id: question.creator_id,
                content: `${isUser.username} has liked your question`,
                notification_type: 'LIKE'
            }
        })
    }

    if(answer_id){
        const answer = await prisma.answer.findUnique({
            where: {
                answer_id: answer_id
            }
        })
        if(!answer) throw {msg: 'Invalid answer', status: 406}

        await prisma.like.create({
            data: {
                user_id: id,
                answer_id: answer_id
            }
        })

        await prisma.notification.create({
            data: {
                user_id: answer.user_id,
                content: `${isUser.username} has liked your question`,
                notification_type: 'LIKE'
            }
        })
    }
}