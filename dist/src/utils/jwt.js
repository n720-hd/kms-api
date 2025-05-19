"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.decodeToken = exports.verifyToken = exports.generateToken = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const generateTokenSecret = process.env.SECRET_KEY_GENERATE_TOKEN;
const accessTokenSecret = process.env.SECRET_KEY_ACCESS_TOKEN;
const generateToken = ({ id, role }) => {
    return jsonwebtoken_1.default.sign({ id, role }, generateTokenSecret, { expiresIn: '2h' });
};
exports.generateToken = generateToken;
const verifyToken = (token) => {
    return jsonwebtoken_1.default.verify(token, generateTokenSecret, (err, decoded) => {
        if (err) {
            if (err.name) {
                return err.message;
            }
        }
        return decoded;
    });
};
exports.verifyToken = verifyToken;
const decodeToken = (token) => {
    return jsonwebtoken_1.default.decode(token);
};
exports.decodeToken = decodeToken;
