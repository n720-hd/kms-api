import { Request, Response, NextFunction } from "express";
import { getAllQuestionsListService } from "@/services/question.service";

export const createQuestion = async (req: Request, res: Response, next: NextFunction) => {
    try {
        
    } catch (error) {
        next(error)
    }
}

export const getAllQuestionsList = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const questions = await getAllQuestionsListService();
        
        res.status(200).json({
            error: false,
            data: questions,
            message: 'Questions retrieved successfully' 
        })
    } catch (error) {
        next(error)
    }
}
