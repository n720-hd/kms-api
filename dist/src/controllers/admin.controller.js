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
exports.getAllUsers = exports.takeDownPost = exports.setMaintenanceMode = void 0;
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
const takeDownPost = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { authorizationRole, usersId, postIds } = req.body;
        if (!Array.isArray(postIds) || postIds.length === 0)
            throw { msg: 'Please select at least one post to take down', status: 400 };
        yield (0, admin_service_1.takeDownPostService)({ id: usersId, role: authorizationRole, postIds });
    }
    catch (error) {
        next(error);
    }
});
exports.takeDownPost = takeDownPost;
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
