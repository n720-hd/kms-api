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
exports.verifyUserToken = void 0;
const jwt_1 = require("../utils/jwt");
const verifyUserToken = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        let { authorization } = req.headers;
        authorization = authorization === null || authorization === void 0 ? void 0 : authorization.split(' ')[1];
        console.log('authorization:', authorization);
        if (!authorization)
            throw { msg: 'Token not found', status: 401 };
        const decodedToken = yield (0, jwt_1.verifyToken)(authorization);
        if (!decodedToken)
            throw { msg: 'Invalid Token', status: 401 };
        console.log('decoded token form middleware: ', decodedToken);
        req.body.usersId = decodedToken.id;
        req.body.authorizationRole = decodedToken.role;
        console.log('usersId from verifyToken:', req.body.usersId);
        console.log('authorizationRole from verifyToken:', req.body.authorizationRole);
        console.log('decoded token id: ', decodedToken === null || decodedToken === void 0 ? void 0 : decodedToken.id);
        console.log('decoded token role: ', decodedToken === null || decodedToken === void 0 ? void 0 : decodedToken.role);
        next();
    }
    catch (error) {
        next(error);
    }
});
exports.verifyUserToken = verifyUserToken;
