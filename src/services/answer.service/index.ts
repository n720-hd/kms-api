import { prisma } from "connection"
import { ICreateAnswer, IEditAnswer } from "./types"
import { deleteFiles } from "@/utils/delete.files";
import { processAttachmentsWithSignedUrls, generateSignedUrl } from "@/utils/s3";

export const createAnswerService = async({id, role, content, question_id, attachments}: ICreateAnswer) => {
    const question = await prisma.question.findUnique({
        where: {
            question_id,
        }
    })

    if(!question) throw {msg: 'Invalid Question', status: 406};

    const isAuthorized = role === 'admin' ? true :
    question.collaborator_type === 'PERSONAL' ? question.collaborator_id === id :
    question.collaborator_type === 'DIVISION' ? await prisma.user.findUnique({
        where: {user_id: id},
        select: {division_id: true}
    }).then(user => user?.division_id === question.collaborator_division_id) :
    true;

    if(!isAuthorized) throw {msg:'You are unauthorized to answer this question', status: 403};

    return await prisma.$transaction(async (tx) => {
        const answer = await tx.answer.create({
            data: {
                content,
                user_id: id,
                question_id,
            }
        })

        const admins = await tx.user.findMany({
            where: {
                role: {
                    name: 'admin'
                }
            }
        })

        if(attachments?.length > 0){
            await Promise.all(
                attachments.map(attachment => 
                    tx.attachment.create({
                        data: {
                            file_name: attachment.originalname || attachment.filename,
                            file_path: (attachment as any).location || (attachment as any).key || `src/public/attachments/${attachment.filename}`,
                            answer_id: answer.answer_id
                        }
                    })
                )
            )
        }

        await Promise.all(
            admins.map(admin => 
                tx.notification.create({
                    data: {
                        content: `An answer is submitted and currently waiting for your approval`,
                        user_id: admin.user_id,
                        notification_type: 'ANSWER_SUBMITTED'
                    }
                })
            )
        )

        // Get the created answer with attachments
        const createdAnswer = await tx.answer.findUnique({
            where: { answer_id: answer.answer_id },
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
            }
        });

        if (!createdAnswer) return null;

        // Process attachments with signed URLs
        const attachmentsWithSignedUrls = await processAttachmentsWithSignedUrls(createdAnswer.attachment || []);
        
        // Generate signed URL for profile picture
        let profilePictureUrl = null;
        if (createdAnswer.user?.profile_picture) {
            try {
                profilePictureUrl = await generateSignedUrl(createdAnswer.user.profile_picture, 86400);
            } catch (error) {
                console.error('Error generating signed URL for user profile picture:', error);
                profilePictureUrl = null;
            }
        }

        return {
            ...createdAnswer,
            attachment: attachmentsWithSignedUrls,
            user: createdAnswer.user ? {
                ...createdAnswer.user,
                profile_picture: profilePictureUrl
            } : null,
        };
    })
}

export const editAnswerService = async({id, role, answer_id, content, attachments, attachmentsToDelete}: IEditAnswer) => {
    console.log(attachments)
    return await prisma.$transaction(async (tx) => {
        const answer = await tx.answer.findUnique({
            where: {answer_id},
            include: {user: {
                select: {
                    user_id: true,
                    role: {
                        select: {
                            name: true
                        }
                    }
                }
            }}
        });

        if(id !== answer?.user_id && role !== answer?.user.role.name) throw {msg: 'You can only edit your own question', status: 406};
        if(!answer) throw {msg: 'Invalid answer', status: 406};

        if(attachmentsToDelete && attachmentsToDelete.length > 0){
            const attachmentsToBeDeleted = await tx.attachment.findMany({
                where: {
                    attachment_id: {in: attachmentsToDelete}
                }
            })
            await deleteFiles({
                fileToDelete: {
                    file: attachmentsToBeDeleted.map(attachment => ({path: attachment.file_path}))
                }
            })
            await tx.attachment.updateMany({
                where: {
                    attachment_id: {in: attachmentsToDelete}
                },
                data: {deleted_at: new Date()}
            })
        }

        if(attachments!.length > 0) {
            await Promise.all(
                attachments!.map(attachment => (
                    tx.attachment.create({
                        data: {
                            file_name: attachment.originalname || attachment.filename,
                            file_path: (attachment as any).location || (attachment as any).key || `src/public/attachments/${attachment.filename}`,
                            answer_id: answer_id
                        }
                    })
                ))
            )
        }

        if(content) await tx.answer.update({
            where: {
                answer_id
            },
            data: {content: content,
                updated_at: new Date()
            }
        })
        
        const updatedAnswer = await tx.answer.findUnique({
            where: { answer_id },
            include: {
                attachment: {
                    where: { deleted_at: null }
                },
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
            }
        });

        if (!updatedAnswer) return null;

        const attachmentsWithSignedUrls = await processAttachmentsWithSignedUrls(updatedAnswer.attachment || []);
        
        let profilePictureUrl = null;
        if (updatedAnswer.user?.profile_picture) {
            try {
                profilePictureUrl = await generateSignedUrl(updatedAnswer.user.profile_picture, 86400);
            } catch (error) {
                console.error('Error generating signed URL for user profile picture:', error);
                profilePictureUrl = null;
            }
        }

        return {
            ...updatedAnswer,
            attachment: attachmentsWithSignedUrls,
            user: updatedAnswer.user ? {
                ...updatedAnswer.user,
                profile_picture: profilePictureUrl
            } : null,
        };
    })
}

export const getAnswerToBeEditedService = async({id, role, answer_id}:{id: number, role: string, answer_id: number}) => {
    console.log(answer_id)
    const answer = await prisma.answer.findUnique({
        where: {
            answer_id: Number(answer_id)
        },
        include: {
            attachment: true
        }
    })
    
    if (!answer) return null;
    
    const attachmentsWithSignedUrls = await processAttachmentsWithSignedUrls(answer.attachment || []);
    
    return {
        ...answer,
        attachment: attachmentsWithSignedUrls
    };
}