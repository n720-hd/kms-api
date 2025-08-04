import { approvePendingAnswerService, approvePendingQuestionService, createNewDivisionService, getAllAnswerListService, getAllDivisionsService, getAllPendingAnswerService, getAllUsersService, getDashboardStatisticsService, getDeletedQuestionsService, getMaintenanceModeService, getRecentQuestionsService, getRecentUsersService, getUserRoleService, setMaintenanceModeService, setUserDivisionService, setUserRoleService, takeDownQuestionService } from "@/services/admin.service";
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

export const getMaintenanceMode = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const {authorizationRole, usersId} = req.body;
        if (authorizationRole !== 'admin') throw {msg: 'Unauthorized', status: 401}

        const maintenanceModeStatus = await getMaintenanceModeService({id: usersId, role: authorizationRole})

        res.status(200).json({
            error: false,
            data: maintenanceModeStatus,
            message: 'Maintenance mode status retrieved successfully'
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

        const divisions = await getAllDivisionsService({id: usersId, role: authorizationRole});
        
        res.status(200).json({
            error: false,
            data: divisions,
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
        const {usersId, authorizationRole, questionId} = req.body;
        if(!usersId || !authorizationRole) throw {msg: 'Please log in', status: 401};
        if(authorizationRole !== 'admin') throw {msg: 'Please log in as administrator', status: 401}
        const question_id = questionId

        await takeDownQuestionService({id: usersId, role: authorizationRole, question_id})
        res.status(200).json({
            error: false,
            data: {},
            message: 'Question taken down successfully'
        })
    } catch (error) {
        next(error)
    }
}


export const approvePendingAnswer = async(req: Request, res: Response, next: NextFunction) => {
    try {
            const {usersId, authorizationRole, answer_id} = req.body;

            console.log('approve pending answer:', usersId, authorizationRole, answer_id)

            if(!answer_id) throw {msg: 'Please select a valid answer', status: 406}
            if(!usersId) throw {msg: 'Invalid credentials', status: 406};
            if(authorizationRole !== 'admin') throw {msg: 'Invalid credentials', status: 406};

            await approvePendingAnswerService({id: usersId, role: authorizationRole, answer_id})

        res.status(200).json({
            error: false,
            data: {},
            message: 'Success'
        })
    } catch (error) {
        next(error)
    }
}

export const getAllAnswerList = async(req: Request, res: Response, next: NextFunction) => {
    try {
        const {usersId, authorizationRole} = req.body;
        const { search, filter, page, limit } = req.query;
        
        if(!usersId) throw {msg: 'Invalid credentials', status: 406};
        if(authorizationRole !== 'admin') throw {msg: 'Invalid credentials', status: 406};

        const result = await getAllAnswerListService({
            id: usersId, 
            role: authorizationRole,
            search: search as string,
            filter: filter as string,
            page: page ? parseInt(page as string) : 1,
            limit: limit ? parseInt(limit as string) : 10
        });

        res.status(200).json({
            error: false,
            data: result.data,
            pagination: result.pagination,
            message: 'All answers retrieved successfully'
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

        console.log('division id:', division_id)
        
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

export const createNewDivision = async(req: Request, res: Response, next: NextFunction) => {
    try {
        const {usersId, authorizationRole, divisionName} = req.body;

        await createNewDivisionService({id: usersId, role: authorizationRole, division_name: divisionName});   
        res.status(201).json({
            error: false,
            data: {},
            message: 'Division created successfully'
        })
    } catch (error) {
        next(error)
    }
}

export const getRecentUsers = async(req: Request, res: Response, next: NextFunction) => {
    try {
        const {usersId, authorizationRole} = req.body;

        const recentUsers = await getRecentUsersService({id: usersId, role: authorizationRole});

        res.status(200).json({
            error: false,
            data: recentUsers,
            message: 'Recent users retrieved successfully'
        })
    } catch (error) {
        next(error)
    }
}

export const getRecentQuestions = async(req: Request, res: Response, next: NextFunction) => {
    try {
        const {usersId, authorizationRole} = req.body;

        const recentQuestions = await getRecentQuestionsService({id: usersId, role: authorizationRole});

        res.status(200).json({
            error: false,
            data: recentQuestions,
            message: 'Recent questions retrieved successfully'
        })
    } catch (error) {
        next(error)
    }
}
export const getDashboardStatistics = async(req: Request, res: Response, next: NextFunction) => {
    try {
        const {usersId, authorizationRole} = req.body;

       const {
            questionsPage = '1',
            questionsLimit = '10',
            questionStatus = null
        } = req.query;

        console.log('dashboard statistics')

        const getDashboardStatistics = await getDashboardStatisticsService({id: usersId, role: authorizationRole,
            questionsPage: parseInt(questionsPage as string),
            questionsLimit: parseInt(questionsLimit as string),
            questionStatus: questionStatus as string | null
        });
        res.status(200).json({
            error: false,
            data: getDashboardStatistics,
            message: 'Dashboard statistics retrieved successfully'
        })
    } catch (error) {
        next(error)
    }
}

export const getDeletedQuestions = async(req: Request, res: Response, next: NextFunction) => {
    try {
        const {usersId, authorizationRole} = req.body;

        const deletedQuestions = await getDeletedQuestionsService({id: usersId, role: authorizationRole});

        res.status(200).json({
            error: false,
            data: deletedQuestions,
            message: 'Deleted questions retrieved successfully'
        })
    } catch (error) {
        next(error)
    }
}