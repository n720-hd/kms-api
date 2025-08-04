import { chatAiService, deleteConversationService, getAiConversationListService, getAiConversationService } from "@/services/ai.service";
import { Request, Response, NextFunction } from "express";


export const testAi = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const { prompt } = req.body;
        if(!prompt) throw { status: 400, message: 'Prompt is required'};
        
        res.status(200).json({
            error: false,
            data: {},
            message: 'AI test succeeded'
        })
    } catch (error) {
        next(error);
    }
}

export const chatAi = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const { prompt, usersId, aiModel, conversationId } = req.body; 
        if(!prompt) throw {msg: 'Invalid Prompt', status: 400};
        if(!aiModel) throw {msg: 'Invalid AI Model', status: 400};

        const aiResponse = await chatAiService({prompt, usersId, aiModel, conversationId})

        res.status(200).json({
            error: false,
            data: aiResponse,
            message: 'AI chat initialized'
        })
    } catch (error) {
        next(error);
    }
}

export const getAiConversation = async(req: Request, res: Response, next: NextFunction) => {
    try {
        const {usersId} = req.body;
        const {conversationId} = req.params;
        console.log(conversationId, 'conv details');

        const conversation = await getAiConversationService({usersId, conversationId: Number(conversationId)})

        res.status(200).json({
            error: false,
            data: conversation,
            message: 'Conversation retrieved'
        })
    } catch (error) {
        next(error)
    } 
}

export const getAiConversationList = async(req: Request, res: Response, next: NextFunction) => {
    try {
        const {usersId}= req.body;

        const conversations = await getAiConversationListService({usersId})
        res.status(200).json({
            error: false,
            data: conversations,
            message: 'Conversation list retrieved'
        })
    } catch (error) {
        next(error)
    }
}

export const deleteConversation = async(req: Request, res: Response, next: NextFunction) => {
    try {
        const {usersId} = req.body;
        const {conversationId} = req.params

        await deleteConversationService({usersId, conversationId: Number(conversationId)})

        res.status(200).json({
            error: false,
            data: {},
            message: 'Conversation successfully deleted'
        })
    } catch (error) {
        next(error)
    }
}