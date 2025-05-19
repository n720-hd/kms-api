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
exports.editAnswer = exports.createAnswer = void 0;
const answer_service_1 = require("../services/answer.service");
const delete_files_1 = require("../utils/delete.files");
const createAnswer = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { usersId, authorizationRole, question_id, content } = req.body;
        const files = req.files || [];
        const attachments = Array.isArray(files) ? files : Object.values(files).flat();
        yield (0, answer_service_1.createAnswerService)({ id: usersId, role: authorizationRole, question_id, content, attachments });
        res.status(201).json({
            error: false,
            data: {},
            message: 'Answer successfully created'
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
exports.createAnswer = createAnswer;
const editAnswer = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { usersId, authorizationRole, content, attachmentsToDelete, answer_id } = req.body;
        const files = req.files || [];
        const attachments = Array.isArray(files) ? files : Object.values(files).flat();
        const attachmentsToBeDeleted = attachmentsToDelete ? JSON.parse(attachmentsToDelete) : [];
        const editedAnswer = yield (0, answer_service_1.editAnswerService)({
            id: usersId,
            role: authorizationRole,
            answer_id: parseInt(answer_id),
            content,
            attachments,
            attachmentsToDelete: attachmentsToBeDeleted
        });
        res.status(200).json({
            error: false,
            data: editedAnswer,
            message: 'Answer successfully edited'
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
exports.editAnswer = editAnswer;
