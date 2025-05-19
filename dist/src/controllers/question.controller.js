"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createAnswer = exports.editQuestion = exports.likeQuestion = exports.createComment = exports.getAllNotifications = exports.deleteTag = exports.createNewTag = exports.getAllTags = exports.getAllQuestionsList = exports.createQuestion = void 0;
const question_service_1 = require("../services/question.service");
const delete_files_1 = require("../utils/delete.files");
const createQuestion = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { title, content, due_date, collaborator_type, collaborator_id, collaborator_division_id, usersId, authorizationRole, tag_ids } = req.body;
        const tagIds = JSON.parse(req.body.tag_ids);
        const collaboratorId = parseInt(collaborator_id);
        const collaboratorDivisionId = parseInt(collaborator_division_id);
        const files = req.files || [];
        const attachments = Array.isArray(files) ? files : Object.values(files).flat();
        if (authorizationRole === 'admin' && authorizationRole === 'creator')
            throw { msg: 'Unauthorized', status: 401 };
        const question = yield (0, question_service_1.createQuestionService)({
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
        });
        res.status(201).json({
            error: false,
            data: question,
            message: 'Question successfully created'
        });
    }
    catch (error) {
        if (req.files) {
            const files = Array.isArray(req.files) ? req.files : Object.values(req.files).flat();
            yield (0, delete_files_1.deleteFiles)({
                fileToDelete: {
                    file: files.map(file => ({
                        path: file.path
                    }))
                }
            });
        }
        next(error);
    }
});
exports.createQuestion = createQuestion;
const getAllQuestionsList = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const search = req.query.search || '';
        const sortBy = req.query.sortBy || 'created_at';
        const sortOrder = (req.query.sortOrder || 'desc').toLowerCase();
        const page = parseInt(req.query.page || '1');
        const limit = parseInt(req.query.limit || '10');
        const tags = req.query.tags ? req.query.tags.split(',') : [];
        const status = req.query.status || '';
        const filter = req.query.filter || 'all';
        const questions = yield (0, question_service_1.getAllQuestionsListService)({ search, sortBy, sortOrder, page, limit, tags, status, filter });
        res.status(200).json({
            error: false,
            data: questions,
            message: 'Questions retrieved successfully'
        });
    }
    catch (error) {
        next(error);
    }
});
exports.getAllQuestionsList = getAllQuestionsList;
const getAllTags = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const tags = yield (0, question_service_1.getAllTagsService)();
        res.status(200).json({
            error: false,
            data: tags,
            message: 'Tags retrieved successfully'
        });
    }
    catch (error) {
        next(error);
    }
});
exports.getAllTags = getAllTags;
const createNewTag = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { tagName } = req.body;
        if (!tagName)
            throw { msg: 'Tag name is required', status: 406 };
        yield (0, question_service_1.createNewTagService)({ tagName });
        res.status(201).json({
            error: false,
            data: null,
            message: 'Tag successfully created'
        });
    }
    catch (error) {
        next(error);
    }
});
exports.createNewTag = createNewTag;
const deleteTag = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { tagId, usersId, authorizationRole } = req.body;
        if (!tagId)
            throw { msg: 'Tag ID is required', status: 406 };
        if (authorizationRole !== 'admin' || authorizationRole !== 'creator')
            throw { msg: 'Unauthorized', status: 401 };
        yield (0, question_service_1.deleteTagService)({ tagId });
        res.status(200).json({
            error: false,
            data: null,
            message: 'Tag successfully removed'
        });
    }
    catch (error) {
        next(error);
    }
});
exports.deleteTag = deleteTag;
const getAllNotifications = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { usersId, authorizationRole } = req.body;
        const notification = yield (0, question_service_1.getAllNotificationsService)({ id: usersId, role: authorizationRole });
        res.status(200).json({
            error: false,
            data: notification,
            message: 'Notification retrieved'
        });
    }
    catch (error) {
        next(error);
    }
});
exports.getAllNotifications = getAllNotifications;
const createComment = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { question_id, comment, usersId, authorizationRole, parent_comment_id, answer_id } = req.body;
        const attachments = req.files || [];
        if (!question_id || !comment)
            throw { msg: 'Question and comment are required', status: 406 };
        yield (0, question_service_1.createCommentService)({
            question_id,
            comment,
            user_id: usersId,
            attachments,
            parent_comment_id,
            answer_id
        });
        res.status(201).json({
            error: false,
            data: {},
            message: 'Comment successfully created'
        });
    }
    catch (error) {
        if (req.files) {
            const files = Array.isArray(req.files) ? req.files : Object.values(req.files).flat();
            yield (0, delete_files_1.deleteFiles)({
                fileToDelete: {
                    file: files.map(file => ({
                        path: file.path
                    }))
                }
            });
        }
        next(error);
    }
});
exports.createComment = createComment;
const likeQuestion = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { usersId, authorizationRole, question_id, answer_id } = req.body;
        yield (0, question_service_1.likeQuestionService)({
            id: usersId,
            role: authorizationRole,
            question_id,
            answer_id
        });
        res.status(200).json({
            error: false,
            data: {},
            message: 'Successfully liked'
        });
    }
    catch (error) {
        next(error);
    }
});
exports.likeQuestion = likeQuestion;
const editQuestion = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { question_id, title, content, due_date, tag_ids, collaborator_type, collaborator_id, collaborator_division_id, usersId, attachmentsToDelete, tagsToDelete, authorizationRole } = req.body;
        if (!question_id)
            throw { msg: 'Invalid Question', status: 406 };
        if (due_date) {
            const parsedDueDate = new Date(due_date);
            if (isNaN(parsedDueDate.getTime()))
                throw { msg: 'Invalid due Date format', status: 406 };
            const today = new Date();
            today.setHours(0, 0, 0, 0);
            parsedDueDate.setHours(0, 0, 0, 0);
            if (parsedDueDate < today)
                throw { msg: 'Due date cannot be in the past', status: 406 };
        }
        const tagIds = tag_ids ? JSON.parse(tag_ids) : [];
        const questionId = parseInt(question_id);
        const attachmentsToBeDeleted = attachmentsToDelete ? JSON.parse(attachmentsToDelete) : [];
        const tagsToBeDeleted = tagsToDelete ? JSON.parse(tagsToDelete) : [];
        const collaboratorId = collaborator_id ? parseInt(collaborator_id) : undefined;
        const collaboratorDivisionId = collaborator_division_id ? parseInt(collaborator_division_id) : undefined;
        const files = req.files || [];
        const attachments = Array.isArray(files) ? files : Object.values(files).flat();
        const editedQuestion = yield (0, question_service_1.editQuestionService)({
            title,
            content,
            question_id: questionId,
            tag_ids: tagIds,
            due_date: due_date,
            collaborator_type,
            collaborator_id: collaboratorId,
            collaborator_division_id: collaboratorDivisionId,
            attachments: { attachments },
            id: usersId,
            role: authorizationRole,
            attachmentsToDelete: attachmentsToBeDeleted,
            tagsToDelete: tagsToBeDeleted,
        });
        res.status(200).json({
            error: false,
            data: editedQuestion,
            message: 'Success'
        });
    }
    catch (error) {
        if (req.files) {
            const files = Array.isArray(req.files) ? req.files : Object.values(req.files).flat();
            yield (0, delete_files_1.deleteFiles)({
                fileToDelete: {
                    file: files.map(file => ({
                        path: file.path
                    }))
                }
            });
        }
        next(error);
    }
});
exports.editQuestion = editQuestion;
const createAnswer = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const {} = req.body;
        res.status(201).json({
            error: false,
            data: {},
            message: 'Answer created'
        });
    }
    catch (error) {
        next(error);
    }
});
exports.createAnswer = createAnswer;
