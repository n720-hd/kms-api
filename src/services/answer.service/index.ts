import { prisma } from "connection"
import { ICreateAnswer, IEditAnswer } from "./types"

export const createAnswerService = async({id, role, content, question_id, attachments}: ICreateAnswer) => {
    const question = await prisma.question.findUnique({
        where: {
            question_id,
        }
    })

    if(!question) throw {msg: 'Invalid Question', status: 406};

    const isAuthorized = role === 'Admin' ? true :
    question.collaborator_type === 'PERSONAL' ? question.collaborator_id === id :
    question.collaborator_type === 'DIVISION' ? await prisma.user.findUnique({
        where: {user_id: id},
        select: {division_id: true}
    }).then(user => user?.division_id === question.collaborator_division_id) :
    false

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
    return await prisma.$transaction(async (tx) => {
        const answer = await tx.answer.findUnique({
            where: {answer_id},
            include: {}
        })
    })
}