import multer from "multer";
import path from "path";
import { uploadS3Attachments, uploadS3ProfilePicture } from "./s3";

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        const uploadDir = path.join(process.cwd(), 'src', 'public', 'attachments');
        cb(null, uploadDir);
    },
    filename: function (req, file, cb) {
        const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
        cb(null, file.fieldname + '-' + uniqueSuffix + '-' + file.originalname);
    }
})

const profilePictureStorage = multer.diskStorage({
    destination: (req, file, cb) => {
        const uploadDir = path.join(process.cwd(), 'src', 'public', 'attachments');
        cb(null, uploadDir);
    },
    filename: function (req, file, cb) {
        const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
        cb(null, 'profile' + '-' + uniqueSuffix + '-' + file.originalname);
    }
})

const fileFilter = (req: any, file: Express.Multer.File, cb: multer.FileFilterCallback) => {
    const allowedTypes = ['png', 'jpg', 'jpeg', 'gif', 'pdf', 'docx', 'xlsx'];

    if (!allowedTypes.includes(file.originalname.split('.')[file.originalname.split('.').length - 1].toLowerCase())) {
        return cb(null, false);
    }
    return cb(null, true);
}

const fileFilterProfilePicture = (req: any, file: Express.Multer.File, cb: multer.FileFilterCallback) => {
    const allowedTypes = ['png', 'jpg', 'jpeg'];

    if (!allowedTypes.includes(file.originalname.split('.')[file.originalname.split('.').length - 1].toLowerCase())) {
        return cb(null, false);
    }
    return cb(null, true);
}

export const uploadMulterAttachments = multer({
    storage: storage,
    fileFilter: fileFilter,
    limits: {
        fileSize: 1024 * 1024 * 8
    }
})

export const uploadMulterProfilePicture = multer({
    storage: profilePictureStorage,
    fileFilter: fileFilterProfilePicture,
    limits: {
        fileSize: 1024 * 1024 * 5 
    }
})

// S3 uploaders (use these instead of local storage)
export const uploadS3AttachmentsMulter = uploadS3Attachments;
export const uploadS3ProfilePictureMulter = uploadS3ProfilePicture;

