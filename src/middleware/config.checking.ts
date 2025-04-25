import { Request, Response, NextFunction } from "express";
import { prisma } from "connection";

export const configChecking = async (req: Request, res: Response, next: NextFunction) => {
    try {
        
        if(req.path.includes('/admin')) return next();

        const is_maintenance = await prisma.config.findFirst({
            where: {
                name: 'is_maintenance',
                status: true
            }
        })

        if(is_maintenance) throw {msg: 'The system is under maintenance, please try again later',status: 503}
        
        next()
    } catch (error) {
        next(error)
    }
}