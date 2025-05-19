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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.changePassword = exports.keepLogin = exports.loginUser = exports.loginCreator = exports.loginAdmin = exports.createCreator = exports.createUser = exports.createAdmin = exports.registerCreator = exports.registerUser = exports.registerAdmin = exports.authUser = void 0;
const prisma_1 = __importDefault(require("../prisma"));
const auth_service_1 = require("../services/auth.service");
const hash_password_1 = require("../utils/hash.password");
const jwt_1 = require("../utils/jwt");
const authUser = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { usersId, authorizationRole } = req.body;
        const data = yield prisma_1.default.user.findMany();
        res.status(200).json({
            message: 'Success',
            data: data,
            error: false
        });
    }
    catch (error) {
        next(error);
    }
});
exports.authUser = authUser;
const registerAdmin = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { email } = req.body;
        if (!email)
            throw { msg: 'Email is required', status: 400 };
        yield (0, auth_service_1.registerAdminService)(email);
        res.status(200).json({
            message: 'Success',
            error: false
        });
    }
    catch (error) {
        next(error);
    }
});
exports.registerAdmin = registerAdmin;
const registerUser = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { email } = req.body;
        if (!email)
            throw { msg: 'Email is required', status: 400 };
        yield (0, auth_service_1.registerUserService)(email);
    }
    catch (error) {
        next(error);
    }
});
exports.registerUser = registerUser;
const registerCreator = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { email } = req.body;
        if (!email)
            throw { msg: 'Email is required', status: 400 };
        yield (0, auth_service_1.registerCreatorService)(email);
        res.status(200).json({
            error: false,
            message: 'Email sent',
            data: {}
        });
    }
    catch (error) {
        next(error);
    }
});
exports.registerCreator = registerCreator;
const createAdmin = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { username, firstName, lastName, password } = req.body;
        if (!firstName)
            throw { msg: 'First name required', status: 406 };
        if (!lastName)
            throw { msg: 'Last name required', status: 406 };
        if (!username || !password)
            throw { msg: 'All fields are required', status: 400 };
        const { token } = req.query;
        const hashedPassword = yield (0, hash_password_1.hashPassword)(password);
        yield (0, auth_service_1.createAdminService)({
            username,
            password: hashedPassword,
            token,
            firstName,
            lastName
        });
        res.status(201).json({
            message: 'Admin registered successfully',
            data: null,
            error: false
        });
    }
    catch (error) {
        next(error);
    }
});
exports.createAdmin = createAdmin;
const createUser = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { username, password, firstName, lastName } = req.body;
        if (!firstName)
            throw { msg: 'First name required', status: 406 };
        if (!lastName)
            throw { msg: 'Last name required', status: 406 };
        if (!username || !password)
            throw { msg: 'All fields are required', status: 400 };
        const { token } = req.query;
        const hashedPassword = yield (0, hash_password_1.hashPassword)(password);
        yield (0, auth_service_1.createUserService)({
            username,
            password: hashedPassword,
            token,
            firstName,
            lastName
        });
        res.status(201).json({
            message: 'User registered successfully',
            data: null,
            error: false
        });
    }
    catch (error) {
        next(error);
    }
});
exports.createUser = createUser;
const createCreator = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { username, password, firstName, lastName } = req.body;
        if (!firstName)
            throw { msg: 'First name required', status: 406 };
        if (!lastName)
            throw { msg: 'Last name required', status: 406 };
        if (!username || !password)
            throw { msg: 'All fields are required', status: 400 };
        const { token } = req.query;
        const hashedPassword = yield (0, hash_password_1.hashPassword)(password);
        yield (0, auth_service_1.createCreatorService)({
            username,
            password: hashedPassword,
            token,
            firstName,
            lastName
        });
        res.status(201).json({
            message: 'Creator registered successfully',
            data: null,
            error: false
        });
    }
    catch (error) {
        next(error);
    }
});
exports.createCreator = createCreator;
const loginAdmin = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { username, password } = req.body;
        if (!username || !password)
            throw { msg: 'All fields are required', status: 400 };
        const admin = yield (0, auth_service_1.loginAdminService)({
            username,
            password
        });
        console.log('admin: ', admin);
        const token = yield (0, jwt_1.generateToken)({ id: admin.user_id, role: admin.role.name });
        res.status(200).json({
            message: 'Success',
            data: {
                id: admin.user_id,
                email: admin.email,
                username: admin.username,
                first_name: admin.first_name,
                last_name: admin.last_name,
                role: admin.role.name,
                token: token,
            },
            error: false
        });
    }
    catch (error) {
        next(error);
    }
});
exports.loginAdmin = loginAdmin;
const loginCreator = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { username, password } = req.body;
        if (!username || !password)
            throw { msg: 'All fields are required', status: 400 };
        const creator = yield (0, auth_service_1.loginCreatorService)({
            username,
            password
        });
        const token = yield (0, jwt_1.generateToken)({ id: creator.user_id, role: creator.role.name });
        res.status(200).json({
            message: 'Success',
            data: {
                id: creator.user_id,
                email: creator.email,
                first_name: creator.first_name,
                last_name: creator.last_name,
                username: creator.username,
                role: creator.role.name,
                token: token,
            }
        });
    }
    catch (error) {
        next(error);
    }
});
exports.loginCreator = loginCreator;
const loginUser = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { username, password } = req.body;
        if (!username || !password)
            throw { msg: 'All fields are required', status: 400 };
        const user = yield (0, auth_service_1.loginUserService)({
            username,
            password
        });
        const token = yield (0, jwt_1.generateToken)({ id: user.user_id, role: user.role.name });
        res.status(200).json({
            message: 'Success',
            data: {
                id: user.user_id,
                email: user.email,
                username: user.username,
                first_name: user.first_name,
                last_name: user.last_name,
                role: user.role.name,
                token: token,
            },
            error: false
        });
    }
    catch (error) {
        next(error);
    }
});
exports.loginUser = loginUser;
const keepLogin = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { usersId, authorizationRole } = req.body;
        console.log(usersId);
        const user = yield (0, auth_service_1.keepLoginService)({ id: usersId, role: authorizationRole });
        res.status(200).json({
            message: 'Success',
            data: {
                id: user.user_id,
                email: user.email,
                username: user.username,
                role: user.role.name,
            }
        });
    }
    catch (error) {
        next(error);
    }
});
exports.keepLogin = keepLogin;
const changePassword = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { usersId, authorizationRole, oldPassword, password } = req.body;
        yield (0, auth_service_1.changePasswordService)({ id: usersId, role: authorizationRole, oldPassword, password });
        res.status(200).json({
            message: 'Password changed successfully',
            data: null,
            error: false
        });
    }
    catch (error) {
        next(error);
    }
});
exports.changePassword = changePassword;
