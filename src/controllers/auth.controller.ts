import prisma from "@/prisma"
import { changePasswordService, createAdminService, createCreatorService, createUserService, keepLoginService, loginAdminService, loginCreatorService, loginUserService, registerAdminService, registerCreatorService, registerUserService } from "@/services/auth.service"
import { hashPassword } from "@/utils/hash.password"
import { generateToken } from "@/utils/jwt"
import { NextFunction,Request,Response } from "express"

export const authUser = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const {usersId, authorizationRole} = req.body
        const data = await prisma.user.findMany()

        res.status(200).json({
            message: 'Success',
            data: data,
            error: false
        })
    } catch (error) {
        next(error)
    }
}

export const registerAdmin = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const {email} = req.body

        if(!email) throw {msg: 'Email is required', status: 400};

        await registerAdminService(email);

        res.status(200).json({
            message: 'Success',
            error: false
        })
    } catch (error) {
        next(error)
    }
}


export const registerUser = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const {email} = req.body
        if(!email) throw {msg: 'Email is required', status: 400};

        await registerUserService(email);
    } catch (error) {
        next(error)
    }
}

export const registerCreator = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const {email} = req.body
        if(!email) throw {msg: 'Email is required', status: 400};
        await registerCreatorService(email);

        res.status(200).json({
            error: false,
            message: 'Email sent',
            data: {}
        })
    } catch (error) {
        next(error)
    }
}

export const createAdmin = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const { username, password } = req.body;
        if (!username  || !password) throw { msg: 'All fields are required', status: 400 };
        const {token} = req.query as {token: string};

        const hashedPassword = await hashPassword(password);

        await createAdminService({
            username,
            password: hashedPassword,
            token
        })

        res.status(201).json({
            message: 'Admin registered successfully',
            data: null,
            error: false
        })
    } catch (error) {
        next(error)
    }
}

export const createUser = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const { username, password } = req.body;
        if (!username  || !password) throw { msg: 'All fields are required', status: 400 };
        const {token} = req.query as {token: string};
        const hashedPassword = await hashPassword(password);
        await createUserService({
            username,
            password: hashedPassword,
            token
        })
        res.status(201).json({
            message: 'User registered successfully',
            data: null,
            error: false
        })
    } catch (error) {
        next(error)
    }
}

export const createCreator = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const {username, password} = req.body;
        if(!username || !password) throw {msg: 'All fields are required', status: 400};
        const {token} = req.query as {token: string};
        const hashedPassword = await hashPassword(password);
        await createCreatorService({
            username,
            password: hashedPassword,
            token
        })
        res.status(201).json({
            message: 'Creator registered successfully',
            data: null,
            error: false
        })
    } catch (error) {
        next(error)
    }
}

export const loginAdmin = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const {username, password} = req.body;
        if(!username || !password) throw {msg: 'All fields are required', status: 400};

        const admin = await loginAdminService({
            username,
            password
        })
        

        const token = await generateToken({id: admin.user_id, role: admin.role.name})

        res.status(200).json({
            message: 'Success',
            data: {
                id: admin.user_id,
                email: admin.email,
                username: admin.username,
                role: admin.role.name,
                token: token,
            },
            error: false
        })
    }catch (error) {
        next(error)
    }
}


export const loginCreator = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const {username, password} = req.body;
        if(!username || !password) throw {msg: 'All fields are required', status: 400};
        const creator = await loginCreatorService({
            username,
            password
        })
        const token = await generateToken({id: creator.user_id, role: creator.role.name})
        res.status(200).json({
            message: 'Success',
            data: {
                id: creator.user_id,
                email: creator.email,
                username: creator.username,
                role: creator.role.name,
                token: token,
            }
        })
    }catch (error) {
        next(error)
    }
}

export const loginUser = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const {username, password} = req.body;
        if(!username || !password) throw {msg: 'All fields are required', status: 400};
        const user = await loginUserService({
            username,
            password
        })
        const token = await generateToken({id: user.user_id, role: user.role.name})
        res.status(200).json({
            message: 'Success',
            data: {
                id: user.user_id,
                email: user.email, 
                username: user.username,
                role: user.role.name,
                token: token,
            },
            error: false
        })
    } catch (error) {
        next(error)
    }
}

export const keepLogin = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const {usersId, authorizationRole} = req.body

        console.log(usersId)

        const user = await keepLoginService({id: usersId, role: authorizationRole})

        res.status(200).json({
            message: 'Success',
            data: {
                id: user.user_id,
                email: user.email,
                username: user.username,
                role: user.role.name,
            }
        })
    } catch (error) {
        next(error)
    }
}

export const changePassword = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const {usersId, authorizationRole, oldPassword, password} = req.body

        await changePasswordService({id: usersId, role: authorizationRole, oldPassword ,password})

        res.status(200).json({
            message: 'Password changed successfully',
            data: null,
            error: false
        })
    } catch (error) {
        next(error)
    }
}