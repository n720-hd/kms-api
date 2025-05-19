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
exports.downloadAttachmentService = void 0;
const connection_1 = require("../../../connection");
const promises_1 = __importDefault(require("fs/promises"));
const downloadAttachmentService = (_a) => __awaiter(void 0, [_a], void 0, function* ({ attachment_id }) {
    const attachmentId = Number(attachment_id);
    const attachment = yield connection_1.prisma.attachment.findUnique({
        where: { attachment_id: attachmentId }
    });
    if (!attachment)
        throw { msg: 'File not found on server, please contact administrator', status: 404 };
    try {
        yield promises_1.default.access(attachment.file_path);
    }
    catch (_b) {
        throw { msg: 'File not found on server, please contact administrator', status: 404 };
    }
    return attachment;
});
exports.downloadAttachmentService = downloadAttachmentService;
