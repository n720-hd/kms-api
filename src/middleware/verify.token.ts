import { Request, Response, NextFunction } from "express";
import { verifyToken } from "@/utils/jwt";

export const verifyUserToken = async(req: Request, res: Response, next: NextFunction) => {
    try {
        let {token} = req.cookies
        

        if(!token) throw {msg: 'Token not found', status: 401}
        const decodedToken: any = await verifyToken(token)
        if(!decodedToken){
            res.clearCookie('token');
            throw {msg: 'Invalid Token', status: 401}
        }

        req.body.usersId = decodedToken!.id
        req.body.authorizationRole = decodedToken!.role

        // console.log('usersId from verifyToken:', req.body.usersId)
        // console.log('authorizationRole from verifyToken:', req.body.authorizationRole)

        // console.log('decoded token id: ', decodedToken?.id)
        // console.log('decoded token role: ', decodedToken?.role)
        next()
    } catch (error) {
        next(error)
    }
}