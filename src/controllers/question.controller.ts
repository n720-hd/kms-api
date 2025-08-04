import { Request, Response, NextFunction } from "express";
import { createNewTagService, createQuestionService, deleteTagService, getAllNotificationsService, getAllQuestionsListService, getAllTagsService, createCommentService, likeQuestionService, editQuestionService, getQuestionDetailsService, markNotificationAsReadService, markAllNotificationsAsReadService, getCollaboratorListService, getCollaboratorDivisionListService, saveQuestionService, getQuestionFeedbackService, createFeedbackService, getLikeStatusService, getQuestionEditService } from "@/services/question.service";
import { deleteFiles } from "@/utils/delete.files";
import { error } from "console";

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
        if(req.files){
            const files = Array.isArray(req.files) ? req.files : Object.values(req.files).flat()
            await deleteFiles({
                fileToDelete: {
                    file: files.map(file => ({
                        path: file.path
                    }))
                }
            })
        }
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

export const getQuestionDetails = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const {question_id} = req.params

        const question = await getQuestionDetailsService({question_id})

        res.status(200).json({
            error: false,
            data: question,
            message: 'Question retrieved'
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
        const {question_id, comment, usersId, authorizationRole, parent_comment_id, answer_id} = req.body;
        const files = req.files || [];
    const attachments = Array.isArray(files) ? files : Object.values(files).flat();
        console.log('attachments : ',attachments)
        console.log('body:',question_id, comment, usersId, authorizationRole, parent_comment_id, answer_id);

        if(!question_id || !comment) throw {msg: 'Question and comment are required', status: 406};
        if(question_id && answer_id) throw {msg: 'You cant comment on question and answer at the same time', status: 400};

        await createCommentService({
            question_id: Number(question_id),
            comment,
            user_id: usersId,
            attachments,
            parent_comment_id: Number(parent_comment_id),
            answer_id: Number(answer_id)
        })

        res.status(201).json({
            error: false,
            data: {},
            message: 'Comment successfully created'
        })
    } catch (error) {
        if(req.files){
            const files = Array.isArray(req.files) ? req.files : Object.values(req.files).flat();
            await deleteFiles({
                fileToDelete: {
                    file: files.map(file => ({
                        path: file.path
                    }))
                }
            })
        }
        next(error)
    }
}

export const likeQuestion = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const {usersId, authorizationRole, question_id, answer_id, like } = req.body

        console.log('likeQuestion body:', req.body)

        await likeQuestionService({
            id: usersId,
            role: authorizationRole,
            question_id,
            answer_id,
            like
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

export const getLikeStatus = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const {usersId} = req.body;
        const {question_id} = req.params;

        const likeStatus = await getLikeStatusService({id: Number(usersId), question_id: Number(question_id)})

        res.status(200).json({
            error: false,
            data: likeStatus,
            message: 'Like status retrieved successfully'
        })
    } catch (error) {
        next(error)
    }
}

export const editQuestion = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const {question_id, title, content, due_date, tag_ids, collaborator_type, collaborator_id, collaborator_division_id, usersId, attachmentsToDelete, tagsToDelete, authorizationRole} = req.body;
        console.log(req.body)
        
        if(!question_id) throw {msg:'Invalid Question', status: 406}
        if (due_date) {
            const parsedDueDate = new Date(due_date);
            if(isNaN(parsedDueDate.getTime())) throw {msg: 'Invalid due Date format', status: 406};
            const today = new Date();
            today.setHours(0, 0, 0, 0);
            parsedDueDate.setHours(0, 0, 0, 0);

            if(parsedDueDate < today) throw {msg: 'Due date cannot be in the past', status: 406};
        }

       const tagIds = Array.isArray(tag_ids) ? tag_ids : tag_ids ? JSON.parse(tag_ids) : [];
const attachmentsToBeDeleted = Array.isArray(attachmentsToDelete)
  ? attachmentsToDelete
  : attachmentsToDelete && attachmentsToDelete !== ""
    ? JSON.parse(attachmentsToDelete)
    : [];
const tagsToBeDeleted = Array.isArray(tagsToDelete)
  ? tagsToDelete
  : tagsToDelete && tagsToDelete !== ""
    ? JSON.parse(tagsToDelete)
    : [];
        const questionId = parseInt(question_id)
        const collaboratorId = collaborator_id ? parseInt(collaborator_id) : undefined;
        const collaboratorDivisionId = collaborator_division_id ? parseInt(collaborator_division_id) : undefined;

        const files = req.files || [];
        const attachments = Array.isArray(files) ? files : Object.values(files).flat();

        const editedQuestion = await editQuestionService({
            title,
            content,
            question_id: questionId,
            tag_ids: tagIds,
            due_date: due_date,
            collaborator_type,
            collaborator_id: collaboratorId,
            collaborator_division_id: collaboratorDivisionId,
            attachments: {attachments},
            id: usersId,
            role: authorizationRole,
            attachmentsToDelete: attachmentsToBeDeleted,
            tagsToDelete: tagsToBeDeleted,
        })

        res.status(200).json({
            error: false,
            data: editedQuestion,
            message: 'Success'
        })
    } catch (error) {
        if(req.files){
            const files = Array.isArray(req.files) ? req.files : Object.values(req.files).flat();
            await deleteFiles({
                fileToDelete: {
                    file: files.map(file => ({
                        path: file.path
                    })
                )}
            })
        }
        next(error)
    }
}

export const markNotificationAsRead = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const {notificationId} = req.params;
        const {usersId, authorizationRole} = req.body;

        if(!notificationId) throw {msg: 'Notification ID is required', status: 406};
        if(!usersId || !authorizationRole) throw {msg: 'Please log in first', status: 401};
        

        await markNotificationAsReadService({
            notificationId,
            id: usersId,
        })

        res.status(200).json({
            error: false,
            data: {},
            message: 'Notification marked as read'
        })
    } catch (error) {
        next(error)
    }
}
export const markAllNotificationsAsRead = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const {usersId, authorizationRole} = req.body;

        if(!usersId || !authorizationRole) throw {msg: 'Please log in first', status: 401};

        await markAllNotificationsAsReadService({id: usersId})

        res.status(200).json({
            error: false,
            data: {},
            message: 'All notifications marked as read'
        })
    } catch (error) {
        next(error)
    }
}

export const getCollaboratorList = async(req: Request, res: Response, next: NextFunction) => {
    try {
        const {usersId, authorizationRole} = req.body;
        
        if(!usersId || !authorizationRole) throw {msg: 'Please log in first', status: 401};

        const collaborators = await getCollaboratorListService();

        res.status(200).json({
            error: false,
            data: collaborators,
            message: 'Collaborators retrieved successfully'
        });
    } catch (error) {
        next(error)
    }
}

export const getCollaboratorDivisionList = async(req: Request, res: Response, next: NextFunction) => {
    try {
        const {usersId, authorizationRole} = req.body;

        if(!usersId || !authorizationRole) throw {msg: 'Please log in first', status: 401};

        const collaboratorDivisions = await getCollaboratorDivisionListService()

        res.status(200).json({
            error: false,
            data: collaboratorDivisions,
            message: 'Collaborator divisions retrieved'
        })
    } catch (error) {
        next(error)
    }
}

export const saveQuestion = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const {question_id, usersId, authorizationRole, save, unsave} = req.body;
        console.log('saveQuestion body:', req.body)

        if(!question_id) throw {msg: 'Question ID is required', status: 406};
        if(!usersId || !authorizationRole) throw {msg: 'Please log in first', status: 401};

        await saveQuestionService({
            question_id,
            id: usersId,
            save,
            unsave
        })
        res.status(200).json({
            error: false,
            data: {},
            message: 'Question saved successfully'
        })
    } catch (error) {
        next(error);
    }
}

// export const getSavedQuestions = async(req: Request, res: Response, next: NextFunction) => {
//     try {
//         const {usersId, authorizationRole} = req.body

//         const savedQuestions = await getSavedQuestionsService({id: usersId, role: authorizationRole})

//         res.status(200).json({
//             error: false,
//             data: {},
//             message: 'Saved questions retrieved'
//         })
//     } catch (error) {
        
//     }
// }

export const getQuestionFeedback = async(req: Request, res: Response, next: NextFunction) => {
    try {
        const {usersId, authorizationRole} = req.body;
        const {question_id} = req.query;

        const questionFeedback = await getQuestionFeedbackService({id: usersId, role: authorizationRole, question_id: Number(question_id)});

        res.status(200).json({
            error: false,
            data: questionFeedback,
            message: 'Feedback retrieved'
        })
    } catch (error) {
        next(error)
    }
}

export const createFeedback = async(req: Request, res: Response, next: NextFunction) => {
    try {
        const {usersId, authorizationRole, content, rating, question_id} = req.body

        await createFeedbackService({id: usersId, role: authorizationRole, content, rating, question_id})

        res.status(201).json({
            error: false,
            data: {},
            message: 'Feedback successfully sent'
        })
    } catch (error) {
        next(error)
    }
}

export const getQuestionEdit = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const {usersId, authorizationRole} = req.body;
        if(!usersId || !authorizationRole) throw {msg: 'Please log in first', status: 401}
        const {question_id} = req.params;

        const question = await getQuestionEditService({question_id: Number(question_id), id: usersId, role: authorizationRole});

        res.status(200).json({
            error: false,
            data: question,
            message: 'Question data to be edited retrieved successfully'
        })
    } catch (error) {
        next(error)
    }
}