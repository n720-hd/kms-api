import { prisma } from "connection"
import { ICreateAnswer, IEditAnswer } from "./types"
import { deleteFiles } from "@/utils/delete.files";

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
                            file_name: attachment.filename,
                            file_path: `src/public/attachments${attachment.filename}`,
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
                            file_name: attachment.filename,
                            file_path: `src/public/attachments/${attachment.filename}`,
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
    return answer
}