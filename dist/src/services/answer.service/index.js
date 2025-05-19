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
exports.editAnswerService = exports.createAnswerService = void 0;
const connection_1 = require("../../../connection");
const createAnswerService = (_a) => __awaiter(void 0, [_a], void 0, function* ({ id, role, content, question_id, attachments }) {
    const question = yield connection_1.prisma.question.findUnique({
        where: {
            question_id,
        }
    });
    if (!question)
        throw { msg: 'Invalid Question', status: 406 };
    const isAuthorized = role === 'Admin' ? true :
        question.collaborator_type === 'PERSONAL' ? question.collaborator_id === id :
            question.collaborator_type === 'DIVISION' ? yield connection_1.prisma.user.findUnique({
                where: { user_id: id },
                select: { division_id: true }
            }).then(user => (user === null || user === void 0 ? void 0 : user.division_id) === question.collaborator_division_id) :
                false;
    if (!isAuthorized)
        throw { msg: 'You are unauthorized to answer this question', status: 403 };
    return yield connection_1.prisma.$transaction((tx) => __awaiter(void 0, void 0, void 0, function* () {
        const answer = yield tx.answer.create({
            data: {
                content,
                user_id: id,
                question_id,
            }
        });
        const admins = yield tx.user.findMany({
            where: {
                role: {
                    name: 'admin'
                }
            }
        });
        if ((attachments === null || attachments === void 0 ? void 0 : attachments.length) > 0) {
            yield Promise.all(attachments.map(attachment => tx.attachment.create({
                data: {
                    file_name: attachment.filename,
                    file_path: `src/public/attachments${attachment.filename}`,
                    answer_id: answer.answer_id
                }
            })));
        }
        yield Promise.all(admins.map(admin => tx.notification.create({
            data: {
                content: `An answer is submitted and currently waiting for your approval`,
                user_id: admin.user_id,
                notification_type: 'ANSWER_SUBMITTED'
            }
        })));
    }));
});
exports.createAnswerService = createAnswerService;
const editAnswerService = (_a) => __awaiter(void 0, [_a], void 0, function* ({ id, role, answer_id, content, attachments, attachmentsToDelete }) {
    return yield connection_1.prisma.$transaction((tx) => __awaiter(void 0, void 0, void 0, function* () {
        const answer = yield tx.answer.findUnique({
            where: { answer_id },
            include: {}
        });
    }));
});
exports.editAnswerService = editAnswerService;
