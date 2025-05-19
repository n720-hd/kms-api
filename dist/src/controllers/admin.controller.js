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
exports.setUserDivision = exports.setUserRole = exports.getUserRole = exports.approvePendingAnswer = exports.getAllPendingAnswer = exports.takeDownQuestion = exports.approvePendingQuestion = exports.getAllDivisions = exports.getAllUsers = exports.setMaintenanceMode = void 0;
const admin_service_1 = require("../services/admin.service");
const setMaintenanceMode = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { authorizationRole, usersId, maintenanceMode } = req.body;
        yield (0, admin_service_1.setMaintenanceModeService)({ maintenanceMode, role: authorizationRole, id: usersId });
        res.status(200).json({
            error: false,
            data: {},
            message: 'Maintenance mode updated successfully'
        });
    }
    catch (error) {
        next(error);
    }
});
exports.setMaintenanceMode = setMaintenanceMode;
const getAllUsers = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { authorizationRole, usersId } = req.body;
        if (authorizationRole !== 'admin')
            throw { msg: 'Unauthorized', status: 401 };
        const users = yield (0, admin_service_1.getAllUsersService)({ id: usersId, role: authorizationRole });
        res.status(200).json({
            error: false,
            data: users,
            message: 'Users retrieved successfully'
        });
    }
    catch (error) {
        next(error);
    }
});
exports.getAllUsers = getAllUsers;
const getAllDivisions = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { authorizationRole, usersId } = req.body;
        if (authorizationRole !== 'admin')
            throw { msg: 'Unauthorized', status: 401 };
        yield (0, admin_service_1.getAllDivisionsService)({ id: usersId, role: authorizationRole });
        res.status(200).json({
            error: false,
            data: {},
            message: 'Divisions retrieved'
        });
    }
    catch (error) {
        next(error);
    }
});
exports.getAllDivisions = getAllDivisions;
const approvePendingQuestion = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { authorizationRole, usersId, question_id, status } = req.body;
        if (authorizationRole !== 'admin' || authorizationRole !== 'reviewer')
            throw { msg: 'Unauthorized', status: 401 };
        yield (0, admin_service_1.approvePendingQuestionService)({ id: usersId, role: authorizationRole, question_id, status });
        res.status(200).json({
            error: false,
            data: {},
            message: `Question ${status}`
        });
    }
    catch (error) {
        next(error);
    }
});
exports.approvePendingQuestion = approvePendingQuestion;
const takeDownQuestion = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { usersId, authorizationRole, question_ids } = req.body;
        const questionIds = Array.isArray(question_ids) ? question_ids : [question_ids];
        yield (0, admin_service_1.takeDownQuestionService)({ id: usersId, role: authorizationRole, question_ids: questionIds });
        res.status(200).json({
            error: false,
            data: {},
            message: 'Question taken down successfully'
        });
    }
    catch (error) {
        next(error);
    }
});
exports.takeDownQuestion = takeDownQuestion;
const getAllPendingAnswer = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { usersId, authorizationRole } = req.body;
        if (!usersId)
            throw { msg: 'Invalid credentials', status: 406 };
        if (authorizationRole !== 'admin')
            throw { msg: 'Invalid credentials', status: 406 };
        const pendingAnswer = (0, admin_service_1.getAllPendingAnswerService)({ id: usersId, role: authorizationRole });
        res.status(200).json({
            error: false,
            data: pendingAnswer,
            message: 'Pending answer retrieved'
        });
    }
    catch (error) {
        next(error);
    }
});
exports.getAllPendingAnswer = getAllPendingAnswer;
const approvePendingAnswer = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { usersId, authorizationRole, answer_ids } = req.body;
        const answerId = Array.isArray(answer_ids) ? answer_ids : [];
        if (answerId.length <= 0)
            throw { msg: 'Please select a valid answer', status: 406 };
        if (!usersId)
            throw { msg: 'Invalid credentials', status: 406 };
        if (authorizationRole !== 'admin')
            throw { msg: 'Invalid credentials', status: 406 };
        yield (0, admin_service_1.approvePendingAnswerService)({ id: usersId, role: authorizationRole, answer_ids: answerId });
        res.status(200).json({
            error: false,
            data: {},
            message: 'Success'
        });
    }
    catch (error) {
        next(error);
    }
});
exports.approvePendingAnswer = approvePendingAnswer;
const getUserRole = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { usersId, authorizationRole } = req.body;
        const roles = yield (0, admin_service_1.getUserRoleService)({ id: usersId, role: authorizationRole });
        res.status(200).json({
            error: false,
            data: roles,
            message: 'Roles successfully retrieved'
        });
    }
    catch (error) {
        next(error);
    }
});
exports.getUserRole = getUserRole;
const setUserRole = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { usersId, authorizationRole, user_id, role_id } = req.body;
        yield (0, admin_service_1.setUserRoleService)({ id: usersId, role: authorizationRole, user_id, role_id });
        res.status(200).json({
            error: false,
            data: {},
            message: 'Role successfully setted'
        });
    }
    catch (error) {
        next(error);
    }
});
exports.setUserRole = setUserRole;
const setUserDivision = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { usersId, authorizationRole, user_id, division_id } = req.body;
        yield (0, admin_service_1.setUserDivisionService)({ id: usersId, role: authorizationRole, user_id, division_id });
        res.status(200).json({
            error: false,
            data: {},
            message: 'Division successfully setted'
        });
    }
    catch (error) {
        next(error);
    }
});
exports.setUserDivision = setUserDivision;
