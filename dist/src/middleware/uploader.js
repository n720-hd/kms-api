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
exports.uploader = void 0;
const multer_1 = require("../utils/multer");
const fs_1 = __importDefault(require("fs"));
const path_1 = __importDefault(require("path"));
const uploader = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        // Create upload directory if it doesn't exist
        const uploadDir = path_1.default.join(process.cwd(), 'src', 'public', 'attachments');
        if (!fs_1.default.existsSync(uploadDir)) {
            fs_1.default.mkdirSync(uploadDir, { recursive: true });
        }
        const { usersId, authorizationRole } = req.body;
        if (!usersId || !authorizationRole)
            throw { msg: 'Invalid Credentials', status: 401 };
        const upload = multer_1.uploadMulterAttachments.fields([
            { name: 'attachments', maxCount: 10 }
        ]);
        upload(req, res, (err) => {
            try {
                if (err)
                    throw err;
                // if (!req.files) throw { msg: 'No files were uploaded', status: 406 };
                // Validate attachments array exists and has length
                // if (!req.files.attachments || !req.files.attachments.length) {
                //     throw { msg: 'Attachments are required', status: 406 };
                // }
                // Log upload paths for debugging
                console.log('Upload directory:', uploadDir);
                // console.log('Uploaded files:', req.files.attachments.map(f => f.path));
                if (usersId && authorizationRole) {
                    req.body.usersId = usersId;
                    req.body.authorizationRole = authorizationRole;
                }
                next();
            }
            catch (err) {
                next(err);
            }
        });
    }
    catch (error) {
        next(error);
    }
});
exports.uploader = uploader;
