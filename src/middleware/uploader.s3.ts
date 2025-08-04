import { Request, Response, NextFunction } from 'express'
import { uploadS3AttachmentsMulter } from '../utils/multer'

export const uploaderS3 = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const { usersId, authorizationRole } = req.body;
        if (!usersId || !authorizationRole) throw { msg: 'Invalid Credentials', status: 401 };

        const upload = uploadS3AttachmentsMulter.fields([
            { name: 'attachments', maxCount: 10 }
        ]);

        upload(req, res, (err) => {
            try {
                if (err) {
                    console.error('S3 Upload error:', err);
                    throw { msg: 'File upload failed', status: 500 };
                }

                // Log uploaded files for debugging
                if (req.files && (req.files as any).attachments) {
                    console.log('Files uploaded to S3:', (req.files as any).attachments.map((f: any) => ({
                        originalName: f.originalname,
                        s3Key: f.key,
                        location: f.location,
                        size: f.size
                    })));
                }

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

export const uploaderS3ProfilePicture = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const { usersId, authorizationRole } = req.body;
        if (!usersId || !authorizationRole) throw { msg: 'Invalid Credentials', status: 401 };

        // Import the profile picture uploader
        const { uploadS3ProfilePictureMulter } = await import('../utils/multer');
        
        const upload = uploadS3ProfilePictureMulter.single('profile_picture');

        upload(req, res, (err) => {
            try {
                if (err) {
                    console.error('S3 Profile Picture Upload error:', err);
                    throw { msg: 'Profile picture upload failed', status: 500 };
                }

                // Log uploaded file for debugging
                if (req.file) {
                    console.log('Profile picture uploaded to S3:', {
                        originalName: req.file.originalname,
                        s3Key: (req.file as any).key,
                        location: (req.file as any).location,
                        size: req.file.size
                    });
                }

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