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
exports.getAllQuestionsListService = exports.createPostService = void 0;
const connection_1 = require("../../../connection");
const createPostService = () => __awaiter(void 0, void 0, void 0, function* () {
});
exports.createPostService = createPostService;
const getAllQuestionsListService = () => __awaiter(void 0, void 0, void 0, function* () {
    const questions = yield connection_1.prisma.question.findMany({
        where: {
            deleted_at: null
        },
        include: {
            creator: {
                select: {
                    id: true,
                    username: true,
                    email: true
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
                    comments: true
                }
            }
        }
    });
    return questions;
});
exports.getAllQuestionsListService = getAllQuestionsListService;
