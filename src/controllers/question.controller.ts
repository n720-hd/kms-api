import { Request, Response, NextFunction } from "express";
import { createNewTagService, createQuestionService, deleteTagService, getAllNotificationsService, getAllQuestionsListService, getAllTagsService, createCommentService, likeQuestionService } from "@/services/question.service";

export const createQuestion = async (req: Request, res: Response, next: NextFunction) => {
    try {
       const { 
            title, 
            content, 
            due_date, 
            collaborator_type, 
            collaborator_id, 
            collaborator_division_id,
            usersId,
            authorizationRole,
            tag_ids 
        } = req.body;
        const tagIds = JSON.parse(req.body.tag_ids)
        const collaboratorId = parseInt(collaborator_id)
        const collaboratorDivisionId = parseInt(collaborator_division_id) 
        const files = req.files || []
        const attachments = Array.isArray(files) ? files : Object.values(files).flat()

        if (authorizationRole === 'admin' && authorizationRole === 'creator') throw {msg: 'Unauthorized', status: 401}
            const question = await createQuestionService({
                title, 
                content, 
                due_date, 
                tag_ids: tagIds, 
                collaborator_type, 
                collaborator_id: collaboratorId, 
                collaborator_division_id: collaboratorDivisionId,
                id: usersId,
                role: authorizationRole,
                attachments: { attachments }
            })
       
        
        res.status(201).json({
            error: false,
            data: question,
            message: 'Question successfully created'
        })
    } catch (error) {
        next(error)
    }
}

export const getAllQuestionsList = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const search = req.query.search as string || '';
        const sortBy = req.query.sortBy as string || 'created_at';
        const sortOrder = (req.query.sortOrder as string || 'desc').toLowerCase();
        const page = parseInt(req.query.page as string || '1');
        const limit = parseInt(req.query.limit as string || '10');
        const tags = req.query.tags ? (req.query.tags as string).split(',') : [];
        const status = req.query.status as string || '';
        const filter = req.query.filter as string || 'all';
        
        const questions = await getAllQuestionsListService({search, sortBy, sortOrder, page, limit, tags, status, filter});
        
        res.status(200).json({
            error: false,
            data: questions,
            message: 'Questions retrieved successfully' 
        })
    } catch (error) {
        next(error)
    }
}

export const getAllTags = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const tags = await getAllTagsService();

        res.status(200).json({
            error: false,
            data: tags,
            message: 'Tags retrieved successfully'
        })
    } catch (error) {
        next(error)
    }
}

export const createNewTag = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const {tagName} = req.body;
        if(!tagName) throw {msg: 'Tag name is required', status: 406};

        await createNewTagService({tagName})

        res.status(201).json({
            error: false,
            data: null,
            message: 'Tag successfully created'
        })
    } catch (error) {
        next(error)
    }
}

export const deleteTag = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const {tagId, usersId, authorizationRole} = req.body;
        if(!tagId) throw {msg: 'Tag ID is required', status: 406};
        if(authorizationRole !== 'admin'|| authorizationRole !== 'creator') throw {msg: 'Unauthorized', status: 401};
        
        await deleteTagService({tagId})

        res.status(200).json({
            error: false,
            data: null,
            message: 'Tag successfully removed'
        })
    } catch (error) {
        next(error)
    }
}

export const getAllNotifications = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const {usersId, authorizationRole} = req.body;

        const notification = await getAllNotificationsService({id: usersId, role: authorizationRole});

        res.status(200).json({
            error: false,
            data: notification,
            message: 'Notification retrieved'
        })
    } catch (error) {
        next(error)
    }
}

export const createComment = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const {question_id, comment, usersId, authorizationRole, parent_comment_id} = req.body;
        const attachments = req.files as Express.Multer.File[] || [];

        if(!question_id || !comment) throw {msg: 'Question and comment are required', status: 406};

        await createCommentService({
            question_id,
            comment,
            user_id: usersId,
            attachments,
            parent_comment_id
        })

        res.status(201).json({
            error: false,
            data: {},
            message: 'Comment successfully created'
        })
    } catch (error) {
        next(error)
    }
}

export const likeQuestion = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const {usersId, authorizationRole, question_id, answer_id } = req.body

        await likeQuestionService({
            id: usersId,
            role: authorizationRole,
            question_id,
            answer_id
        })

        res.status(200).json({
            error: false,
            data: {},
            message: 'Successfully liked'
        })
    } catch (error) {
        next(error)
    }
}

export const editQuestion = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const {} = req.body
    } catch (error) {
        next(error)
    }
}
