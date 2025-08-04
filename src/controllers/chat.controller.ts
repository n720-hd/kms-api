import { NextFunction, Request, Response } from "express";
import { createGlobalMessageService, deleteMessageService, editMessageService, getGlobalMessageHistoryService } from "@/services/chat.service";

export const getGlobalMessages = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const { limit = 50, offset = 0 } = req.query;
        
        const data = await getGlobalMessageHistoryService(
            parseInt(limit as string), 
            parseInt(offset as string)
        );

        res.status(200).json({
            message: 'Success',
            data,
            error: false
        });
    } catch (error) {
        next(error);
    }
};

export const editMessage = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const { messageId } = req.params;
        const { content } = req.body;
        const { usersId } = req.body;

        if (!content) throw { msg: 'Content is required', status: 400 };

        const updatedMessage = await editMessageService(
            parseInt(messageId), 
            usersId, 
            content
        );

        res.status(200).json({
            message: 'Message updated successfully',
            data: updatedMessage,
            error: false
        });
    } catch (error) {
        next(error);
    }
};

export const deleteMessage = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const { messageId } = req.params;
        const { usersId } = req.body;

        await deleteMessageService(parseInt(messageId), usersId);

        res.status(200).json({
            message: 'Message deleted successfully',
            data: null,
            error: false
        });
    } catch (error) {
        next(error);
    }
};