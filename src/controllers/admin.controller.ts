import { approvePendingQuestionService, getAllDivisionsService, getAllUsersService, setMaintenanceModeService, takeDownQuestionService } from "@/services/admin.service";
import { Request, Response, NextFunction } from "express";

export const setMaintenanceMode = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const {authorizationRole, usersId, maintenanceMode} = req.body
        
        await setMaintenanceModeService({maintenanceMode, role: authorizationRole, id: usersId})

        res.status(200).json({
            error: false,
            data: {},
            message: 'Maintenance mode updated successfully'
        })
    } catch (error) {
        next(error)
    }
}


export const getAllUsers = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const {authorizationRole, usersId} = req.body;
        if (authorizationRole !== 'admin') throw {msg: 'Unauthorized', status: 401}

        const users = await getAllUsersService({id: usersId, role: authorizationRole})

        res.status(200).json({
            error: false,
            data: users,
            message: 'Users retrieved successfully'
        })
    } catch (error) {
        next(error)
    }
}

export const getAllDivisions = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const {authorizationRole, usersId} = req.body;
        if (authorizationRole !== 'admin') throw {msg: 'Unauthorized', status: 401}

        await getAllDivisionsService({id: usersId, role: authorizationRole});
        
        res.status(200).json({
            error: false,
            data: {},
            message: 'Divisions retrieved'
        })
    } catch (error) {
        next(error)
    }
}

export const approvePendingQuestion = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const {authorizationRole, usersId, question_id, status} = req.body;
        if (authorizationRole !== 'admin' || authorizationRole !== 'reviewer') throw {msg: 'Unauthorized', status: 401};

        await approvePendingQuestionService({id: usersId, role: authorizationRole, question_id, status})
        
        res.status(200).json({
            error: false,
            data: {},
            message: `Question ${status}`
        })
    } catch (error) {
        next(error)
    }
}

export const takeDownQuestion = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const {usersId, authorizationRole, question_ids} = req.body;

        const questionIds = Array.isArray(question_ids) ? question_ids : [question_ids];

        await takeDownQuestionService({id: usersId, role: authorizationRole, question_ids: questionIds})
        res.status(200).json({
            error: false,
            data: {},
            message: 'Question taken down successfully'
        })
    } catch (error) {
        next(error)
    }
}