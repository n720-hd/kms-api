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
exports.editQuestionService = exports.likeQuestionService = exports.createCommentService = exports.getAllNotificationsService = exports.deleteTagService = exports.createNewTagService = exports.getAllTagsService = exports.getAllQuestionsListService = exports.createQuestionService = void 0;
const connection_1 = require("../../../connection");
const delete_files_1 = require("../../utils/delete.files");
const createQuestionService = (_a) => __awaiter(void 0, [_a], void 0, function* ({ title, content, due_date, tag_ids, collaborator_type, collaborator_id, collaborator_division_id, id, role, attachments }) {
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
            user_id: id,
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
    console.log('attachments: ', attachments);
    console.log('Attachment structure received:', typeof attachments);
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
        if (attachments && attachments.attachments && attachments.attachments.length > 0) {
            const createdAttachments = yield Promise.all(attachments.attachments.map(attachment => tx.attachment.create({
                data: {
                    file_name: attachment.filename,
                    file_path: `src/public/attachments/${attachment.filename}`,
                    question_id: question.question_id,
                }
            })));
        }
        yield Promise.all(tag_ids.map((tagId) => __awaiter(void 0, void 0, void 0, function* () {
            return tx.tagsOnQuestions.create({
                data: {
                    question_id: question.question_id,
                    tag_id: parseInt(tagId.toString())
                }
            });
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
                        user_id: user.user_id,
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
                    user_id: reviewer.user_id,
                    question_id: question.question_id,
                    notification_type: 'QUESTION_ASSIGNED'
                }
            })));
        }
        const questionWithAttachments = yield connection_1.prisma.attachment.findMany({
            where: { question_id: question.question_id }
        });
        console.log(questionWithAttachments);
        return {
            title: question.title,
            content: question.content,
            due_date: question.due_date,
            status: question.status,
            tag_ids: tag_ids,
            collaborator_type: question.collaborator_type,
            collaborator_id: question.collaborator_id,
            collaborator_division_id: question.collaborator_division_id,
            attachments: questionWithAttachments || []
        };
    }));
});
exports.createQuestionService = createQuestionService;
const getAllQuestionsListService = (_a) => __awaiter(void 0, [_a], void 0, function* ({ search = '', sortBy = 'created_at', sortOrder = 'desc', page = 1, limit = 10, tags = [], status = '', filter = 'all' }) {
    const validSortOrder = ['asc', 'desc'].includes(sortOrder) ? sortOrder : 'desc';
    const validSortFields = ['created_at', 'title', 'due_date', 'status', 'updated_at', 'likes_count', 'comments_count', 'answers_count'];
    let validSortBy = validSortFields.includes(sortBy) ? sortBy : 'created_at';
    const offset = (page - 1) * limit;
    const where = {
        deleted_at: null,
        is_published: true
    };
    if (!status) {
        where.status = { notIn: ['PENDING', 'REJECTED'] };
    }
    else {
        where.status = status;
    }
    if (search) {
        where.OR = [
            { title: { contains: search } },
            { content: { contains: search } }
        ];
    }
    if (tags && tags.length > 0) {
        where.tags = {
            some: {
                tag: {
                    name: {
                        in: Array.isArray(tags) ? tags : [tags]
                    }
                }
            }
        };
    }
    const skip = (page - 1) * limit;
    const questions = yield connection_1.prisma.question.findMany({
        where,
        include: {
            creator: {
                select: {
                    user_id: true,
                    username: true,
                    email: true
                }
            },
            attachment: true,
            collaborator: {
                select: {
                    user_id: true,
                    username: true,
                    email: true
                }
            },
            comments: true,
            collaborator_division: {
                select: {
                    id: true,
                    division_name: true
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
                    comments: true,
                    answers: true
                }
            }
        },
        orderBy: {
            [sortBy]: sortOrder
        },
        skip,
        take: limit
    });
    const total = yield connection_1.prisma.question.count({ where });
    const formattedQuestions = questions.map(question => {
        const tags = question.tags.map(t => t.tag);
        return Object.assign(Object.assign({}, question), { tags, likes_count: question._count.likes, comments_count: question._count.comments, answers_count: question._count.answers, _count: undefined, attachment: question.attachment });
    });
    return {
        data: formattedQuestions,
        pagination: {
            total,
            page,
            limit,
            totalPages: Math.ceil(total / limit),
            hasNextPage: page < Math.ceil(total / limit),
            hasPrevPage: page > 1
        }
    };
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
const getAllNotificationsService = (_a) => __awaiter(void 0, [_a], void 0, function* ({ id, role }) {
    const notifications = yield connection_1.prisma.notification.findMany({
        where: {
            user_id: id
        }
    });
    return notifications;
});
exports.getAllNotificationsService = getAllNotificationsService;
const createCommentService = (_a) => __awaiter(void 0, [_a], void 0, function* ({ question_id, comment, user_id, attachments, parent_comment_id, answer_id }) {
    if (parent_comment_id) {
        const parentComment = yield connection_1.prisma.comment.findUnique({
            where: { comment_id: parent_comment_id }
        });
        if (!parentComment)
            throw { msg: 'Invalid comment', status: 406 };
    }
    const createdComment = yield connection_1.prisma.comment.create({
        data: Object.assign({ content: comment, user_id: user_id, parent_id: parent_comment_id ? parent_comment_id : null }, (question_id
            ? { question_id: question_id }
            : { answer_id: answer_id }))
    });
    if (attachments && attachments.length > 0) {
        yield Promise.all(attachments.map((attachment) => __awaiter(void 0, void 0, void 0, function* () {
            yield connection_1.prisma.attachment.create({
                data: {
                    file_name: attachment.filename,
                    file_path: attachment.path,
                    comment_id: createdComment.comment_id
                }
            });
        })));
    }
});
exports.createCommentService = createCommentService;
const likeQuestionService = (_a) => __awaiter(void 0, [_a], void 0, function* ({ id, role, question_id, answer_id }) {
    const isUser = yield connection_1.prisma.user.findUnique({
        where: {
            user_id: id
        }
    });
    if (!isUser)
        throw { msg: 'Invalid Credentials', status: 406 };
    if (question_id) {
        const question = yield connection_1.prisma.question.findUnique({
            where: {
                question_id: question_id
            },
            include: {
                creator: true,
            }
        });
        if (!question)
            throw { msg: 'Invalid Question', status: 406 };
        yield connection_1.prisma.like.create({
            data: {
                user_id: id,
                question_id: question_id
            }
        });
        yield connection_1.prisma.notification.create({
            data: {
                user_id: question.creator_id,
                content: `${isUser.username} has liked your question`,
                notification_type: 'LIKE'
            }
        });
    }
    if (answer_id) {
        const answer = yield connection_1.prisma.answer.findUnique({
            where: {
                answer_id: answer_id
            }
        });
        if (!answer)
            throw { msg: 'Invalid answer', status: 406 };
        yield connection_1.prisma.like.create({
            data: {
                user_id: id,
                answer_id: answer_id
            }
        });
        yield connection_1.prisma.notification.create({
            data: {
                user_id: answer.user_id,
                content: `${isUser.username} has liked your question`,
                notification_type: 'LIKE'
            }
        });
    }
});
exports.likeQuestionService = likeQuestionService;
const editQuestionService = (_a) => __awaiter(void 0, [_a], void 0, function* ({ title, content, question_id, tag_ids, due_date, collaborator_type, collaborator_id, attachments, id, role, attachmentsToDelete, tagsToDelete, collaborator_division_id }) {
    yield connection_1.prisma.$transaction((tx) => __awaiter(void 0, void 0, void 0, function* () {
        const questionToEdit = yield tx.question.findUnique({
            where: { question_id },
            include: { attachment: true, tags: true }
        });
        if (!questionToEdit)
            throw { msg: 'Invalid Questtion', status: 404 };
        if (questionToEdit.creator_id !== id)
            throw { msg: 'You can only edit your own question', status: 403 };
        if (attachmentsToDelete && attachmentsToDelete.length > 0) {
            const attachmentsToBeDeleted = yield tx.attachment.findMany({
                where: {
                    question_id,
                    attachment_id: { in: attachmentsToDelete }
                }
            });
            if (attachmentsToBeDeleted.length > 0)
                yield (0, delete_files_1.deleteFiles)({
                    fileToDelete: {
                        file: attachmentsToBeDeleted.map(attachment => ({ path: attachment.file_path }))
                    }
                });
            yield tx.attachment.deleteMany({
                where: {
                    attachment_id: { in: attachmentsToDelete },
                    question_id
                }
            });
        }
        if (tagsToDelete && tagsToDelete.length > 0) {
            const tagsToBeDeleted = yield tx.tagsOnQuestions.findMany({
                where: {
                    question_id,
                    tag_id: { in: tagsToDelete }
                },
            });
            if (tagsToBeDeleted.length > 0)
                yield tx.tagsOnQuestions.deleteMany({
                    where: { tag_id: { in: tagsToDelete } }
                });
        }
        const updateData = {};
        if (title !== undefined)
            updateData.title = title;
        if (content !== undefined)
            updateData.content = content;
        if (due_date !== undefined)
            updateData.due_date = due_date;
        if (collaborator_type !== undefined) {
            if (collaborator_type === 'PERSONAL') {
                updateData.collaborator_id = collaborator_id;
                updateData.collaborator_division_id = null;
                if (collaborator_id) {
                    yield tx.notification.create({
                        data: {
                            user_id: collaborator_id,
                            notification_type: 'QUESTION_ASSIGNED',
                            content: `You have been assigned a new Question: ${title}`
                        }
                    });
                }
            }
            else if (collaborator_type === 'DIVISION') {
                updateData.collaborator_division_id = collaborator_division_id;
                updateData.collaborator_id = null;
                const divisionUsers = yield connection_1.prisma.user.findMany({
                    where: {
                        division_id: collaborator_division_id
                    }
                });
                yield Promise.all(divisionUsers.map(user => (tx.notification.create({
                    data: {
                        user_id: user.user_id,
                        notification_type: 'QUESTION_ASSIGNED',
                        content: `Your division has been assigned a new question: ${title}`,
                        question_id
                    }
                }))));
            }
            else {
                updateData.collaborator_id = null;
                updateData.collaborator_division_id = null;
            }
        }
        updateData.updated_at = new Date();
        console.log(updateData);
        const updatedQuestion = yield tx.question.update({
            where: { question_id },
            data: updateData
        });
        console.log(updatedQuestion);
        if (attachments.attachments.length > 0) {
            yield Promise.all(attachments.attachments.map(attachment => (tx.attachment.create({
                data: {
                    file_name: attachment.filename,
                    file_path: `src/public/attachments/${attachment.filename}`,
                    question_id
                }
            }))));
        }
        if (tag_ids.length > 0) {
            yield Promise.all(tag_ids.map(tag_id => tx.tagsOnQuestions.create({
                data: {
                    question_id,
                    tag_id: Number(tag_id)
                }
            })));
        }
    }));
    return yield connection_1.prisma.question.findUnique({
        where: { question_id },
        include: {
            attachment: true,
            tags: {
                include: {
                    tag: true
                }
            }
        }
    });
});
exports.editQuestionService = editQuestionService;
