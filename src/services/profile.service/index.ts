import { deleteFiles } from "@/utils/delete.files";
import { generateSignedUrl } from "@/utils/s3";
import { prisma } from "connection";

export const getUserProfileService = async ({id, role}: {id: number, role: string}) => {
    const user = await prisma.user.findUnique({
        where: {
            user_id: id,
            role: {
                name: role
            }
        },
        select: {
            user_id: true,
            email: true,
            first_name: true,
            last_name: true,
            username: true,
            profile_picture: true,
            role: {
                select: {
                    name: true
                }
            },
            division: {
                select: {
                    division_name: true
                }
            }
        }
    })

    if(!user) throw {msg: 'Invalid credentials', status: 404};

    let profilePictureUrl = null;
    if (user.profile_picture) {
        try {
            profilePictureUrl = await generateSignedUrl(user.profile_picture, 86400);
        } catch (error) {
            console.error('Error generating signed URL for profile picture:', error);
            profilePictureUrl = null;
        }
    }

    return {
        ...user,
        profile_picture: profilePictureUrl,
        role: user.role.name,
        division: user.division?.division_name || null
    }
}

export const editUserProfileService = async ({
  id,
  role,
  first_name,
  last_name,
  profile_picture,
  username
}: any) => {
  return await prisma.$transaction(async (tx) => {
    const currentUser = await tx.user.findUnique({
      where: { 
        user_id: id, 
        is_active: true,
        deleted_at: null,
        role: { name: role }
      },
    });

    if (!currentUser) {
      throw { msg: 'User not found', status: 404 };
    }

    const updateData: any = {};
    if (first_name) updateData.first_name = first_name;
    if (last_name) updateData.last_name = last_name;
    if (username) updateData.username = username;

    if (profile_picture) {
      updateData.profile_picture = profile_picture;
      
      const updatedUser = await tx.user.update({
        where: { user_id: id },
        data: updateData,
      });

      if (currentUser.profile_picture) {
        try {
          await deleteFiles({
            fileToDelete: {
              file: [{ path: currentUser.profile_picture }]
            }
          });
          
        } catch (deleteError) {
          console.error('Failed to delete old profile picture:', deleteError);
        }
      }

      return updatedUser;
    }

    return await tx.user.update({
      where: { user_id: id },
      data: updateData,
    });
  });
};

export const getMyQuestionsService = async ({id, role}: {id: number, role: string}) => {
  const myQuestions = await prisma.question.findMany({
    where: {
      creator_id: id,
      creator: {
        role: {
          name: role
        }
      },
      deleted_at: null
    }
  })

  return myQuestions;
}

export const getMyAnswersService = async ({id, role}: {id: number, role: string}) => {
  const myAnswers = await prisma.answer.findMany({
    where: {
      user_id: id,
      user: {
        role: {
          name: role
        }
      }
    }
  })

  return myAnswers;
}

export const getMySavedQuestionsService = async ({id, role}: {id: number, role: string}) => {
  const mySavedQuestions = await prisma.savedQuestion.findMany({
    where: {
      user_id: id,
      user: {
        role: {
          name: role
        }
      },
      deleted_at: null
    },
    include: {
      question: {
        select: {
          question_id: true,
          title: true,
          content: true,
          created_at: true,
          updated_at: true,
          creator_id: true,
          creator: {
            select: {
              username: true,
              first_name: true,
              last_name: true,
              profile_picture: true
            }
          }
        }
      }
    }
  })
  
  return mySavedQuestions;
}