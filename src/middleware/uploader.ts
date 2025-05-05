import { Request, Response, NextFunction } from 'express'
import {uploadMulterAttachments} from '../utils/multer'
import fs from 'fs';
import path from 'path';

export const uploader = async (req: Request, res: Response, next: NextFunction) => {
    try {
        // Create upload directory if it doesn't exist
        const uploadDir = path.join(process.cwd(), 'src', 'public', 'attachments');
        if (!fs.existsSync(uploadDir)) {
            fs.mkdirSync(uploadDir, { recursive: true });
        }

        const { usersId, authorizationRole } = req.body;
        if (!usersId || !authorizationRole) throw { msg: 'Invalid Credentials', status: 401 };

        const upload = uploadMulterAttachments.fields([
            { name: 'attachments', maxCount: 10 }
        ]);

        upload(req, res, (err) => {
            try {
                if (err) throw err;
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
            } catch (err) {
                next(err);
            }
        });
    } catch (error) {
        next(error);
    }
}