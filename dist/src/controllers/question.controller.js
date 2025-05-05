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
exports.deleteTag = exports.createNewTag = exports.getAllTags = exports.getAllQuestionsList = exports.createQuestion = void 0;
const question_service_1 = require("../services/question.service");
const createQuestion = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { title, content, due_date, tag_ids, collaborator_type, collaborator_id, collaborator_division_id, usersId, authorizationRole } = req.body;
        if (authorizationRole === 'admin' && authorizationRole === 'creator')
            throw { msg: 'Unauthorized', status: 401 };
        const question = yield (0, question_service_1.createQuestionService)({
            title,
            content,
            due_date,
            tag_ids,
            collaborator_type,
            collaborator_id,
            collaborator_division_id,
            id: usersId,
            role: authorizationRole
        });
        res.status(201).json({
            error: false,
            data: question,
            message: 'Question successfully created'
        });
    }
    catch (error) {
        next(error);
    }
});
exports.createQuestion = createQuestion;
const getAllQuestionsList = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const questions = yield (0, question_service_1.getAllQuestionsListService)();
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
