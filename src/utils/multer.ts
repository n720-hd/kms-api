import multer from "multer";
import path from "path";

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

const fileFilter = (req: any, file: Express.Multer.File, cb: multer.FileFilterCallback) => {
    const allowedTypes = ['png', 'jpg', 'jpeg', 'gif', 'pdf', 'docx', 'xlsx'];

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

