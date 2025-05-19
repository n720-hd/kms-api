import { createAnswerService, editAnswerService } from "@/services/answer.service";
import { deleteFiles } from "@/utils/delete.files";
import { Request, Response, NextFunction } from "express";

export const createAnswer = async(req: Request, res: Response, next: NextFunction) => {
    try {
        const {usersId, authorizationRole, question_id, content} = req.body

        const files = req.files || [];
        const attachments = Array.isArray(files) ? files : Object.values(files).flat();

        await createAnswerService({id: usersId, role: authorizationRole, question_id, content, attachments})

        res.status(201).json({
            error: false,
            data: {},
            message: 'Answer successfully created'
        })
    } catch (error) {
        if(req.files){
            const files = Array.isArray(req.files) ? req.files : Object.values(req.files).flat();
            await deleteFiles({
                fileToDelete: {
                file: files.map(file => ({
                    path: file.path
                }))
                }
            })
        }
        next(error)
    }
}

export const editAnswer = async(req: Request, res: Response, next: NextFunction) => {
    try {
        const {usersId, authorizationRole, content, attachmentsToDelete, answer_id} = req.body
        const files = req.files || [];
        const attachments = Array.isArray(files) ? files : Object.values(files).flat();
        const attachmentsToBeDeleted = attachmentsToDelete ? JSON.parse(attachmentsToDelete) : [];

        const editedAnswer = await editAnswerService({
            id: usersId,
            role: authorizationRole,
            answer_id: parseInt(answer_id),
            content,
            attachments,
            attachmentsToDelete: attachmentsToBeDeleted
        })

        res.status(200).json({
            error: false,
            data: editedAnswer,
            message: 'Answer successfully edited'
        })
    } catch (error) {
        if(req.files){
            const files = Array.isArray(req.files) ? req.files : Object.values(req.files).flat();
            await deleteFiles({
                fileToDelete: {
                file: files.map(file => ({
                    path: file.path
                }))
                }
            })
        }
        next(error)
    }
}