"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
const express_1 = require("express");
const index_1 = __importDefault(require("./auth.routers/index"));
const index_2 = __importDefault(require("./admin.routers/index"));
const index_3 = __importDefault(require("./question.routers/index"));
const index_4 = __importDefault(require("./answer.routers/index"));
const index_5 = __importDefault(require("./attachment.routers/index"));
exports.router = (0, express_1.Router)();
exports.router.use('/api/auth', index_1.default);
exports.router.use('/api/admin', index_2.default);
exports.router.use('/api/question', index_3.default);
exports.router.use('/api/answer', index_4.default);
exports.router.use('/api/attachment', index_5.default);
