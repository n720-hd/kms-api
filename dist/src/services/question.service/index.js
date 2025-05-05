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
exports.deleteTagService = exports.createNewTagService = exports.getAllTagsService = exports.getAllQuestionsListService = exports.createQuestionService = void 0;
const connection_1 = require("../../../connection");
const createQuestionService = (_a) => __awaiter(void 0, [_a], void 0, function* ({ title, content, due_date, tag_ids, collaborator_type, collaborator_id, collaborator_division_id, id, role }) {
    if (!title || !content || !due_date)
        throw { msg: 'Title, content and due date are required', status: 406 };
    if (collaborator_type === 'PERSONAL' && !collaborator_id)
        throw { msg: 'Collaborator ID is required for personal assignment', status: 406 };
    if (collaborator_type === 'DIVISION' && !collaborator_division_id)
        throw { msg: 'Division ID is required for division assignment', status: 406 };
    if (!['PERSONAL', 'DIVISION', 'NONE'].includes(collaborator_type))
        throw { msg: 'Invalid collaborator type', status: 406 };
    if (!tag_ids || !Array.isArray(tag_ids) || tag_ids.length === 0)
        throw { msg: 'At least one tag is required', status: 406 };
    const isAuthorized = yield connection_1.prisma.user.findUnique({
        where: {
            id,
            role: {
                name: {
                    in: ['admin', 'creator']
                }
            }
        }
    });
    if (!isAuthorized)
        throw { msg: 'Unauthorized', status: 401 };
    const initialStatus = role === 'admin' ? 'ASSIGNED' : 'PENDING';
    return yield connection_1.prisma.$transaction((tx) => __awaiter(void 0, void 0, void 0, function* () {
        const question = yield tx.question.create({
            data: {
                title,
                content,
                due_date: new Date(due_date),
                creator_id: id,
                status: initialStatus,
                collaborator_type,
                collaborator_id: collaborator_type === 'PERSONAL' ? collaborator_id : null
            }
        });
        yield Promise.all(tag_ids.map(tagId => tx.tagsOnQuestions.create({
            data: {
                question_id: question.question_id,
                tag_id: parseInt(tagId.toString())
            }
        })));
        if (initialStatus === 'ASSIGNED') {
            if (collaborator_type === 'PERSONAL' && collaborator_id) {
                yield tx.notification.create({
                    data: {
                        content: `New question assigned to you: ${question.title}`,
                        user_id: collaborator_id,
                        question_id: question.question_id,
                        notification_type: 'QUESTION_ASSIGNED'
                    }
                });
            }
            else if (collaborator_type === 'DIVISION' && collaborator_division_id) {
                const divisionUsers = yield tx.user.findMany({
                    where: {
                        division_id: collaborator_division_id
                    }
                });
                yield Promise.all(divisionUsers.map(user => tx.notification.create({
                    data: {
                        content: `Your division has been assigned a new question: ${title}`,
                        user_id: user.id,
                        question_id: question.question_id,
                        notification_type: 'QUESTION_ASSIGNED'
                    }
                })));
            }
        }
        else if (initialStatus === 'PENDING') {
            const reviewers = yield tx.user.findMany({
                where: {
                    role: {
                        name: {
                            in: ['admin', 'reviewer']
                        }
                    }
                }
            });
            yield Promise.all(reviewers.map(reviewer => tx.notification.create({
                data: {
                    content: `New question pending approval: ${title}`,
                    user_id: reviewer.id,
                    question_id: question.question_id,
                    notification_type: 'QUESTION_ASSIGNED'
                }
            })));
        }
        return {
            title: question.title,
            content: question.content,
            due_date: question.due_date,
            status: question.status,
            tag_ids: tag_ids,
            collaborator_type: question.collaborator_type,
            collaborator_id: question.collaborator_id,
            collaborator_division_id: question.collaborator_division_id
        };
    }));
});
exports.createQuestionService = createQuestionService;
const getAllQuestionsListService = () => __awaiter(void 0, void 0, void 0, function* () {
    const questions = yield connection_1.prisma.question.findMany({
        where: {
            deleted_at: null,
            status: { notIn: ['PENDING', 'REJECTED'] }
        },
        include: {
            creator: {
                select: {
                    id: true,
                    username: true,
                    email: true
                }
            },
            tags: {
                select: {
                    tag: {
                        select: {
                            tag_id: true,
                            name: true
                        }
                    }
                }
            },
            _count: {
                select: {
                    likes: true,
                    comments: true
                }
            }
        }
    });
    return questions;
});
exports.getAllQuestionsListService = getAllQuestionsListService;
const getAllTagsService = () => __awaiter(void 0, void 0, void 0, function* () {
    const tags = yield connection_1.prisma.tag.findMany({ where: { deleted_at: null } });
    return tags;
});
exports.getAllTagsService = getAllTagsService;
const createNewTagService = (_a) => __awaiter(void 0, [_a], void 0, function* ({ tagName }) {
    const newTag = yield connection_1.prisma.tag.create({
        data: {
            name: tagName
        }
    });
});
exports.createNewTagService = createNewTagService;
const deleteTagService = (_a) => __awaiter(void 0, [_a], void 0, function* ({ tagId }) {
    const id = Number(tagId);
    yield connection_1.prisma.tag.update({
        where: {
            tag_id: id
        },
        data: {
            deleted_at: new Date()
        }
    });
});
exports.deleteTagService = deleteTagService;
