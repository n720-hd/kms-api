"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.uploadMulterAttachments = void 0;
const multer_1 = __importDefault(require("multer"));
const path_1 = __importDefault(require("path"));
const storage = multer_1.default.diskStorage({
    destination: (req, file, cb) => {
        const uploadDir = path_1.default.join(process.cwd(), 'src', 'public', 'attachments');
        cb(null, uploadDir);
    },
    filename: function (req, file, cb) {
        const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
        cb(null, file.fieldname + '-' + uniqueSuffix + '-' + file.originalname);
    }
});
const fileFilter = (req, file, cb) => {
    const allowedTypes = ['png', 'jpg', 'jpeg', 'gif', 'pdf', 'docx', 'xlsx'];
    if (!allowedTypes.includes(file.originalname.split('.')[file.originalname.split('.').length - 1].toLowerCase())) {
        return cb(null, false);
    }
    return cb(null, true);
};
exports.uploadMulterAttachments = (0, multer_1.default)({
    storage: storage,
    fileFilter: fileFilter,
    limits: {
        fileSize: 1024 * 1024 * 8
    }
});
