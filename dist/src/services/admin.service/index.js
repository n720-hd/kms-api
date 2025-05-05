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
exports.approvePendingQuestionService = exports.getAllDivisionsService = exports.getAllUsersService = exports.takeDownPostService = exports.setMaintenanceModeService = void 0;
const connection_1 = require("../../../connection");
const setMaintenanceModeService = (_a) => __awaiter(void 0, [_a], void 0, function* ({ maintenanceMode, id, role }) {
    yield connection_1.prisma.user.findUnique({
        where: {
            id,
            role: {
                name: role
            }
        }
    });
    if (role !== 'admin')
        throw { msg: 'You are unauthorized to perform this action', status: 401 };
    yield connection_1.prisma.config.update({
        where: {
            name: 'is_maintenance'
        },
        data: {
            status: maintenanceMode
        }
    });
});
exports.setMaintenanceModeService = setMaintenanceModeService;
const takeDownPostService = (_a) => __awaiter(void 0, [_a], void 0, function* ({ id, role, postIds }) {
    if (role !== 'admin')
        throw { msg: 'You are unauthorized to perform this action', status: 401 };
    postIds.length > 1 ? yield connection_1.prisma.question.updateMany({
        where: {
            question_id: { in: postIds }
        },
        data: {
            deleted_at: new Date()
        }
    }) : yield connection_1.prisma.question.update({
        where: {
            question_id: postIds[0]
        },
        data: {
            deleted_at: new Date()
        }
    });
});
exports.takeDownPostService = takeDownPostService;
const getAllUsersService = (_a) => __awaiter(void 0, [_a], void 0, function* ({ id, role }) {
    const users = yield connection_1.prisma.user.findMany({
        where: {
            role: {
                name: { not: 'admin' }
            }
        },
        select: {
            id: true,
            username: true,
            email: true
        }
    });
    return users;
});
exports.getAllUsersService = getAllUsersService;
const getAllDivisionsService = (_a) => __awaiter(void 0, [_a], void 0, function* ({ id, role }) {
    const admin = yield connection_1.prisma.user.findUnique({
        where: {
            id: id,
            role: {
                name: role
            }
        }
    });
    if (!admin)
        throw { msg: 'You are unauthorized to perform this action', status: 401 };
    const divisions = yield connection_1.prisma.division.findMany({
        where: {
            deleted_at: null
        }
    });
    return divisions;
});
exports.getAllDivisionsService = getAllDivisionsService;
const approvePendingQuestionService = (_a) => __awaiter(void 0, [_a], void 0, function* ({ id, role, question_id, status }) {
    if (role !== 'admin' && role !== 'reviewer')
        throw { msg: 'You are unauthorized to perform this action', status: 401 };
    status === true ? (yield connection_1.prisma.question.update({
        where: {
            question_id: question_id
        },
        data: {
            status: 'ASSIGNED'
        }
    })) : (yield connection_1.prisma.question.update({
        where: {
            question_id: question_id
        },
        data: {
            status: 'REJECTED'
        }
    }));
});
exports.approvePendingQuestionService = approvePendingQuestionService;
