import { downloadAttachmentService } from "@/services/attachment.service";
import { Request, Response, NextFunction } from "express";

export const downloadAttachment = async(req: Request, res: Response, next: NextFunction) => {
    try {
        const {attachment_id} = req.params;
        if(!attachment_id) throw {msg: 'Invalid file', status: 406};

        const attachment = await downloadAttachmentService({attachment_id});
        if(!attachment) throw {msg: 'File not found on server, please contact administrator', status: 404};

        // Return the signed download URL instead of serving the file directly
        res.json({
            success: true,
            data: {
                file_name: attachment.file_name,
                download_url: attachment.download_url
            }
        });
    } catch (error) {
        next(error)
    }
}