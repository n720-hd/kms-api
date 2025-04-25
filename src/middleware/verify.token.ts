import { Request, Response, NextFunction } from "express";
import { verifyToken } from "@/utils/jwt";

export const verifyUserToken = async(req: Request, res: Response, next: NextFunction) => {
    try {
        let {authorization} = req.headers

        authorization = authorization?.split(' ')[1] as string
        console.log('authorization:', authorization)

        if(!authorization) throw {msg: 'Token not found', status: 401}
        const decodedToken: any = await verifyToken(authorization)
        if(!decodedToken) throw {msg: 'Invalid Token', status: 401}
        console.log('decoded token form middleware: ',decodedToken)

        req.body.usersId = decodedToken!.id
        req.body.authorizationRole = decodedToken!.role

        console.log('usersId from verifyToken:', req.body.usersId)
        console.log('authorizationRole from verifyToken:', req.body.authorizationRole)

        console.log('decoded token id: ', decodedToken?.id)
        console.log('decoded token role: ', decodedToken?.role)
        next()
    } catch (error) {
        next(error)
    }
}