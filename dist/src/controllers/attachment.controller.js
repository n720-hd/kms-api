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
exports.downloadAttachment = void 0;
const attachment_service_1 = require("../services/attachment.service");
const path_1 = __importDefault(require("path"));
const downloadAttachment = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { attachment_id } = req.params;
        if (!attachment_id)
            throw { msg: 'Invalid file', status: 406 };
        const attachment = yield (0, attachment_service_1.downloadAttachmentService)({ attachment_id });
        if (!attachment)
            throw { msg: 'File not found on server, please contact administrator', status: 404 };
        const ext = path_1.default.extname(attachment.file_name).toLowerCase();
        const contentType = {
            '.pdf': 'application/pdf',
            '.jpg': 'image/jpeg',
            '.jpeg': 'image/jpeg',
            '.png': 'image/png',
            '.gif': 'image/gif',
            '.docx': 'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
            '.xlsx': 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'
        }[ext] || 'application/octet-stream';
        res.setHeader('Content-Type', contentType);
        res.setHeader('Content-Disposition', `attachment; filename="${attachment.file_name}"`);
        res.download(attachment.file_path, attachment.file_name, (err) => {
            if (err) {
                next({ msg: 'Error downloading file', status: 500 });
            }
        });
    }
    catch (error) {
        next(error);
    }
});
exports.downloadAttachment = downloadAttachment;
