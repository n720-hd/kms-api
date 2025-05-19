"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const answer_controller_1 = require("../../controllers/answer.controller");
const question_controller_1 = require("../../controllers/question.controller");
const uploader_1 = require("../../middleware/uploader");
const verify_token_1 = require("../../middleware/verify.token");
const express_1 = __importDefault(require("express"));
const router = (0, express_1.default)();
router.post('/', verify_token_1.verifyUserToken, uploader_1.uploader, question_controller_1.createAnswer);
router.patch('/', verify_token_1.verifyUserToken, uploader_1.uploader, answer_controller_1.editAnswer);
exports.default = router;
