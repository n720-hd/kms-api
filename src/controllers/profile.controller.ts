import { editUserProfileService, getMyAnswersService, getMyQuestionsService, getMySavedQuestionsService, getUserProfileService } from "@/services/profile.service";
import { deleteFiles } from "@/utils/delete.files";
import { error } from "console";
import { Request, Response, NextFunction, request } from "express";

export const getUserProfile = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const {authorizationRole, usersId} = req.body;
       
        if(!usersId || !authorizationRole) throw {msg: 'Invalid credentials', status: 404};
        const user = await getUserProfileService({id: usersId, role: authorizationRole})

        res.status(200).json({
            error: false,
            data: user,
            message: 'Profile retrieved'
        })
    } catch (error) {
        next(error);
    }
}

export const editUserProfile = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const {authorizationRole, usersId, first_name, last_name, username} = req.body;
        
        const profile_picture = req?.file ? (req.file as any).key || req.file.filename : null;

        console.log(req.body, req.file);
        await editUserProfileService({
            id: usersId,
            role: authorizationRole,
            first_name,
            last_name,
            username,
            profile_picture
        })

        res.status(200).json({
            error: false,
            data: {},
            message: 'Profile successfully updated'
        })
    } catch (error) {
        if (req.file) {
            await deleteFiles({
                fileToDelete: {
                    file: [{
                        path: (req.file as any).location || req.file.path
                    }]
                }
            });
        }
        next(error);
    }
}

export const getMyQuestions = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const {authorizationRole, usersId} = req.body;

        const myQuestions = await getMyQuestionsService({id: usersId, role: authorizationRole});

        res.status(200).json({
            error: false,
            data: myQuestions,
            message: 'Questions retrieved'
        })
    } catch (error) {
        next(error);
    }
}

export const getMyAnswers = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const {authorizationRole, usersId} = req.body;

        const myAnswers = await getMyAnswersService({id: usersId, role: authorizationRole});

        res.status(200).json({
            error: false,
            data: myAnswers,
            message: 'Answers retrieved'
        })
    } catch (error) {
        next(error);
    }
}

export const getMySavedQuestions = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const {authorizationRole, usersId} = req.body;

        const mySavedQuestions = await getMySavedQuestionsService({id: usersId, role: authorizationRole});

        console.log(mySavedQuestions)
        res.status(200).json({
            error: false,
            data: mySavedQuestions,
            message: 'Saved questions retrieved'
        })
    } catch (error) {
        next(error);
    }
}