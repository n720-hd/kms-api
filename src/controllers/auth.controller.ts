import {prisma} from "../../connection/"
import { changePasswordService, createAdminService, createCreatorService, createUserService, forgetPasswordService, keepLoginService, loginAdminService, loginCreatorService, loginUserService, registerAdminService, registerCreatorService, registerUserService, resetPasswordService } from "@/services/auth.service"
import { hashPassword } from "@/utils/hash.password"
import { generateToken } from "@/utils/jwt"
import { generateSignedUrl } from "@/utils/s3"
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
            data: {},
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

        res.status(200).json({
            error: false,
            data: {},
            message: 'A verification email has been sent to your email address'
        })
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
        const { username, firstName, lastName, password } = req.body;
        if(!firstName) throw {msg: 'First name required', status: 406};
        if(!lastName) throw {msg: 'Last name required', status: 406};
        if (!username  || !password) throw { msg: 'All fields are required', status: 400 };
        const {token} = req.query as {token: string};

        const hashedPassword = await hashPassword(password);

        await createAdminService({
            username,
            password: hashedPassword,
            token,
            firstName,
            lastName
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
        const { username, password, firstName, lastName } = req.body;
        if(!firstName) throw {msg: 'First name required', status: 406};
        if(!lastName) throw {msg: 'Last name required', status: 406};
        if (!username  || !password) throw { msg: 'All fields are required', status: 400 };
        const {token} = req.query as {token: string};
        const hashedPassword = await hashPassword(password);
        await createUserService({
            username,
            password: hashedPassword,
            token,
            firstName,
            lastName
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
        const {username, password, firstName, lastName} = req.body;
        if(!firstName) throw {msg: 'First name required', status: 406};
        if(!lastName) throw {msg: 'Last name required', status: 406};
        if(!username || !password) throw {msg: 'All fields are required', status: 400};
        const {token} = req.query as {token: string};
        const hashedPassword = await hashPassword(password);
        await createCreatorService({
            username,
            password: hashedPassword,
            token,
            firstName,
            lastName
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
        
        console.log('admin: ',admin);
        const token = await generateToken({id: admin.user_id, role: admin.role.name})
        res.cookie('token', token, {maxAge: 3600000, httpOnly: true, secure: true, sameSite: 'strict'})
        res.status(200).json({
            message: 'Success',
            data: {
                id: admin.user_id,
                email: admin.email,
                username: admin.username,
                first_name: admin.first_name,
                last_name: admin.last_name,
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
                first_name: creator.first_name,
                last_name: creator.last_name,
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
        res.cookie('token', token, {maxAge: 3600000, httpOnly: true, secure: true, sameSite: 'strict'})
        res.status(200).json({
            message: 'Success',
            data: {
                id: user.user_id,
                email: user.email, 
                username: user.username,
                first_name: user.first_name,
                last_name: user.last_name,
                role: user.role.name,
                profile_picture: user.profile_picture
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

        const profilePictureUrl = user.profile_picture 
            ? await generateSignedUrl(user.profile_picture, 86400)
            : null;

        res.status(200).json({
            message: 'Success',
            data: {
                id: user.user_id,
                email: user.email,
                username: user.username,
                role: user.role.name,
                first_name: user.first_name,
                last_name: user.last_name,
                profile_picture: profilePictureUrl
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

export const forgetPassword = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const {email} = req.body
        if(!email) throw {msg: 'Email is required', status: 400};
        if(!email.includes('@')) throw {msg: 'Invalid email', status: 400};

        await forgetPasswordService(email)
        res.status(200).json({
            error: false,
            data: {},
            message: 'Success'
        })
    } catch (error) {
        next(error)
    }
}

export const resetPassword = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const {password} = req.body;
        const {token} = req.query as {token: string};

        const hashedPassword = await hashPassword(password)

        await resetPasswordService({password: hashedPassword, token})

        res.status(200).json({
            error: false,
            data: {},
            message: 'Password successfully resetted'
        })
    } catch (error) {
        next(error)
    }
}
 
export const logout = async(req: Request, res: Response, next: NextFunction) => {
    try {
        res.clearCookie('token', {httpOnly: true, secure: true, sameSite: 'strict'})

        res.status(200).json({
            error: false,
            data: {},
            message: 'Successfully logged out'
        })
    } catch (error) {
        next(error)
    }
}