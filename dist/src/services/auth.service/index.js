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
exports.changePasswordService = exports.keepLoginService = exports.loginCreatorService = exports.loginUserService = exports.loginAdminService = exports.createCreatorService = exports.createUserService = exports.createAdminService = exports.registerCreatorService = exports.registerUserService = exports.registerAdminService = void 0;
const prisma_1 = __importDefault(require("../../prisma"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const fs_1 = __importDefault(require("fs"));
const handlebars_1 = require("handlebars");
const transporter_1 = require("../../utils/transporter");
const hash_password_1 = require("../../utils/hash.password");
const registerAdminService = (email) => __awaiter(void 0, void 0, void 0, function* () {
    const admin = yield prisma_1.default.user.findUnique({
        where: {
            email,
            role: {
                name: 'admin'
            }
        }
    });
    if (admin)
        throw { msg: 'Admin already exists', status: 400 };
    const registerAdminToken = jsonwebtoken_1.default.sign({ email }, '3214', { expiresIn: '1h' });
    const adminRoleId = yield prisma_1.default.role.findUnique({
        where: { name: 'admin' },
        select: { id: true, name: true },
    });
    const createdAdmin = yield prisma_1.default.user.create({
        data: {
            email,
            token: registerAdminToken,
            role: {
                connect: { id: adminRoleId === null || adminRoleId === void 0 ? void 0 : adminRoleId.id }
            },
            password: 'a43201234',
        }
    });
    const template = fs_1.default.readFileSync('src/public/registration.html', 'utf-8');
    const url = `http://localhost:3000/auth/verify?token=${createdAdmin.token}`;
    const compiledEmail = (0, handlebars_1.compile)(template);
    const personalizedEmail = compiledEmail({
        name: createdAdmin.email,
        url: url,
        role: adminRoleId.name
    });
    yield transporter_1.transporter.sendMail({
        to: email,
        subject: 'Registration',
        html: personalizedEmail
    });
});
exports.registerAdminService = registerAdminService;
const registerUserService = (email) => __awaiter(void 0, void 0, void 0, function* () {
    const user = yield prisma_1.default.user.findUnique({
        where: {
            email,
            role: {
                name: 'user'
            }
        }
    });
    if (user)
        throw { msg: 'User already exists', status: 400 };
    const registerUserToken = jsonwebtoken_1.default.sign({ email }, '3214', { expiresIn: '1h' });
    const userRoleId = yield prisma_1.default.role.findUnique({
        where: { name: 'user' },
        select: { id: true, name: true },
    });
    const createdUser = yield prisma_1.default.user.create({
        data: {
            email,
            token: registerUserToken,
            role: {
                connect: { id: userRoleId === null || userRoleId === void 0 ? void 0 : userRoleId.id }
            },
            password: 'a432012345',
        }
    });
    const template = fs_1.default.readFileSync('src/public/registration.html', 'utf-8');
    const url = `http://localhost:3000/auth/verify?token=${createdUser.token}`;
    const compiledEmail = (0, handlebars_1.compile)(template);
    const personalizedEmail = compiledEmail({
        name: createdUser.email,
        url: url,
        role: userRoleId.name
    });
    yield transporter_1.transporter.sendMail({
        to: email,
        subject: 'Registration',
        html: personalizedEmail
    });
});
exports.registerUserService = registerUserService;
const registerCreatorService = (email) => __awaiter(void 0, void 0, void 0, function* () {
    const creator = yield prisma_1.default.user.findUnique({
        where: {
            email,
            role: {
                name: 'creator'
            }
        }
    });
    if (creator)
        throw { msg: 'Creator already exists', status: 400 };
    const registerCreatorToken = jsonwebtoken_1.default.sign({ email }, '3214', { expiresIn: '1h' });
    const creatorRoleId = yield prisma_1.default.role.findUnique({
        where: { name: 'creator' },
        select: { id: true, name: true },
    });
    const createdCreator = yield prisma_1.default.user.create({
        data: {
            email,
            token: registerCreatorToken,
            role: {
                connect: { id: creatorRoleId === null || creatorRoleId === void 0 ? void 0 : creatorRoleId.id }
            },
            password: 'a432012345',
        }
    });
    const template = fs_1.default.readFileSync('src/public/registration.html', 'utf-8');
    const url = `http://localhost:3000/auth/verify?token=${createdCreator.token}`;
    const compiledEmail = (0, handlebars_1.compile)(template);
    const personalizedEmail = compiledEmail({
        name: createdCreator.email,
        url: url,
        role: creatorRoleId.name
    });
    yield transporter_1.transporter.sendMail({
        to: email,
        subject: 'Registration',
        html: personalizedEmail
    });
});
exports.registerCreatorService = registerCreatorService;
const createAdminService = (_a) => __awaiter(void 0, [_a], void 0, function* ({ username, password, token, firstName, lastName }) {
    const admin = yield prisma_1.default.user.findUnique({
        where: {
            token,
            role: {
                name: 'admin'
            }
        }
    });
    if (!admin)
        throw { msg: 'Invalid Link', status: 400 };
    const adminRole = yield prisma_1.default.role.findUnique({
        where: {
            name: 'admin'
        },
        select: {
            id: true
        }
    });
    yield prisma_1.default.user.update({
        where: {
            token: token,
        },
        data: {
            username,
            password,
            token: null,
            role_id: adminRole.id,
            first_name: firstName,
            last_name: lastName
        }
    });
});
exports.createAdminService = createAdminService;
const createUserService = (_a) => __awaiter(void 0, [_a], void 0, function* ({ username, password, token, firstName, lastName }) {
    const user = yield prisma_1.default.user.findUnique({
        where: {
            token,
            role: {
                name: 'user'
            }
        }
    });
    if (!user)
        throw { msg: 'Invalid Link', status: 400 };
    const userRole = yield prisma_1.default.role.findUnique({
        where: {
            name: 'user'
        },
        select: {
            id: true
        }
    });
    yield prisma_1.default.user.update({
        where: {
            token: token,
        },
        data: {
            username,
            password,
            token: null,
            role_id: userRole.id,
            first_name: firstName,
            last_name: lastName
        }
    });
});
exports.createUserService = createUserService;
const createCreatorService = (_a) => __awaiter(void 0, [_a], void 0, function* ({ username, password, token, firstName, lastName }) {
    const creator = yield prisma_1.default.user.findUnique({
        where: {
            token,
            role: {
                name: 'creator'
            }
        }
    });
    if (!creator)
        throw { msg: 'Invalid Link', status: 400 };
    const creatorRole = yield prisma_1.default.role.findUnique({
        where: {
            name: 'creator'
        },
        select: {
            id: true, name: true
        }
    });
    yield prisma_1.default.user.update({
        where: {
            token: token,
        },
        data: {
            username,
            password,
            token: null,
            role_id: creatorRole.id
        }
    });
});
exports.createCreatorService = createCreatorService;
const loginAdminService = (_a) => __awaiter(void 0, [_a], void 0, function* ({ username, password }) {
    const admin = yield prisma_1.default.user.findFirst({
        where: {
            OR: [
                { email: username },
                { username: username }
            ],
        }, include: {
            role: {
                select: {
                    id: true,
                    name: true
                }
            }
        }
    });
    if ((admin === null || admin === void 0 ? void 0 : admin.role.name) !== 'admin')
        throw { msg: 'Invalid User', status: 400 };
    if (!admin)
        throw { msg: 'Invalid User', status: 400 };
    if (!admin.password)
        throw { msg: 'Password not set', status: 400 };
    const isPasswordValid = yield (0, hash_password_1.comparePassword)(password, admin.password);
    if (!isPasswordValid)
        throw { msg: 'Invalid Password', status: 400 };
    return admin;
});
exports.loginAdminService = loginAdminService;
const loginUserService = (_a) => __awaiter(void 0, [_a], void 0, function* ({ username, password }) {
    const user = yield prisma_1.default.user.findFirst({
        where: {
            OR: [
                { email: username },
                { username: username }
            ],
        }, include: {
            role: {
                select: {
                    id: true,
                    name: true
                }
            }
        }
    });
    if ((user === null || user === void 0 ? void 0 : user.role.name) !== 'user')
        throw { msg: 'Invalid User', status: 400 };
    if (!user)
        throw { msg: 'Invalid User', status: 400 };
    if (!user.password)
        throw { msg: 'Password not set', status: 400 };
    const isPasswordValid = yield (0, hash_password_1.comparePassword)(password, user.password);
    if (!isPasswordValid)
        throw { msg: 'Invalid Password', status: 400 };
    return user;
});
exports.loginUserService = loginUserService;
const loginCreatorService = (_a) => __awaiter(void 0, [_a], void 0, function* ({ username, password }) {
    const creator = yield prisma_1.default.user.findFirst({
        where: {
            OR: [
                { username: username },
                { email: username }
            ]
        },
        include: {
            role: {
                select: {
                    id: true,
                    name: true
                }
            }
        }
    });
    if ((creator === null || creator === void 0 ? void 0 : creator.role.name) !== 'creator')
        throw { msg: 'Invalid User', status: 400 };
    if (!creator)
        throw { msg: 'Invalid User', status: 400 };
    if (!creator.password)
        throw { msg: 'Password not set', status: 400 };
    const isPasswordValid = yield (0, hash_password_1.comparePassword)(password, creator.password);
    if (!isPasswordValid)
        throw { msg: 'Invalid Password', status: 400 };
    return creator;
});
exports.loginCreatorService = loginCreatorService;
const keepLoginService = (_a) => __awaiter(void 0, [_a], void 0, function* ({ id, role }) {
    const user = yield prisma_1.default.user.findUnique({
        where: {
            user_id: id,
            role: {
                name: role
            }
        },
        include: {
            role: {
                select: { id: true, name: true }
            }
        }
    });
    if (!user)
        throw { msg: 'Invalid User', status: 400 };
    return user;
});
exports.keepLoginService = keepLoginService;
const changePasswordService = (_a) => __awaiter(void 0, [_a], void 0, function* ({ id, role, password, oldPassword }) {
    const user = yield prisma_1.default.user.findUnique({
        where: {
            user_id: id,
            role: {
                name: role
            }
        }
    });
    if (!user)
        throw { msg: 'Invalid Credentials', status: 400 };
    const isPasswordValid = yield (0, hash_password_1.comparePassword)(oldPassword, user.password);
    if (!isPasswordValid)
        throw { msg: 'Invalid Password', status: 400 };
    const hashedPassword = yield (0, hash_password_1.hashPassword)(password);
    yield prisma_1.default.user.update({
        where: {
            user_id: id,
            role_id: user.role_id
        },
        data: {
            password: hashedPassword
        }
    });
});
exports.changePasswordService = changePasswordService;
