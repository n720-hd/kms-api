import { approvePendingAnswerService, approvePendingQuestionService, getAllDivisionsService, getAllPendingAnswerService, getAllUsersService, getUserRoleService, setMaintenanceModeService, setUserDivisionService, setUserRoleService, takeDownQuestionService } from "@/services/admin.service";
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

export const getAllPendingAnswer = async(req: Request, res: Response, next: NextFunction) => {
    try {
        const {usersId, authorizationRole} = req.body;

        if(!usersId) throw {msg: 'Invalid credentials', status: 406};
        if(authorizationRole !== 'admin') throw {msg: 'Invalid credentials', status: 406};

        const pendingAnswer = getAllPendingAnswerService({id: usersId, role: authorizationRole})

        res.status(200).json({
            error: false,
            data: pendingAnswer,
            message: 'Pending answer retrieved'
        })
    } catch (error) {
        next(error)
    }
}

export const approvePendingAnswer = async(req: Request, res: Response, next: NextFunction) => {
    try {
            const {usersId, authorizationRole, answer_ids} = req.body;

            const answerId = Array.isArray(answer_ids) ? answer_ids : [];

            if(answerId.length <= 0) throw {msg: 'Please select a valid answer', status: 406}
            if(!usersId) throw {msg: 'Invalid credentials', status: 406};
            if(authorizationRole !== 'admin') throw {msg: 'Invalid credentials', status: 406};

            await approvePendingAnswerService({id: usersId, role: authorizationRole, answer_ids: answerId})

        res.status(200).json({
            error: false,
            data: {},
            message: 'Success'
        })
    } catch (error) {
        next(error)
    }
}

export const getUserRole = async(req: Request, res: Response, next: NextFunction) => {
    try {
        const {usersId, authorizationRole} = req.body;

        const roles = await getUserRoleService({id: usersId, role: authorizationRole})

        res.status(200).json({
            error: false,
            data: roles,
            message: 'Roles successfully retrieved'
        })
    } catch (error) {
        next(error)
    }
}

export const setUserRole = async(req: Request, res: Response, next: NextFunction) => {
    try {
        const {usersId, authorizationRole, user_id, role_id} = req.body;

        await setUserRoleService({id: usersId, role: authorizationRole, user_id, role_id})
        res.status(200).json({
            error: false,
            data: {},
            message: 'Role successfully setted'
        })
    } catch (error) {
        next(error)
    }
}

export const setUserDivision = async(req: Request, res: Response, next: NextFunction) => {
    try {
        const {usersId, authorizationRole, user_id, division_id} = req.body;
        
        await setUserDivisionService({id: usersId, role: authorizationRole, user_id, division_id});
        res.status(200).json({
            error: false,
            data: {},
            message: 'Division successfully setted'
        })
    } catch (error) {
        next(error)
    }
}