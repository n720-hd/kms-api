import { getAllUsersService, setMaintenanceModeService, takeDownPostService } from "@/services/admin.service";
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

export const takeDownPost = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const {authorizationRole, usersId, postIds } = req.body;

        if(!Array.isArray(postIds) || postIds.length === 0) throw {msg: 'Please select at least one post to take down', status: 400}
        
        await takeDownPostService({id: usersId, role: authorizationRole, postIds})
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

