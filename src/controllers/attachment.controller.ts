import { downloadAttachmentService } from "@/services/attachment.service";
import { Request, Response, NextFunction } from "express";
import path from 'path'

export const downloadAttachment = async(req: Request, res: Response, next: NextFunction) => {
    try {
        const {attachment_id} = req.params;
        if(!attachment_id) throw {msg: 'Invalid file', status: 406};

        const attachment = await downloadAttachmentService({attachment_id});
        if(!attachment) throw {msg: 'File not found on server, please contact administrator', status: 404};

        const ext = path.extname(attachment.file_name).toLowerCase();
        
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

    } catch (error) {
        next(error)
    }
}