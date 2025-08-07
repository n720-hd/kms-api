import { prisma } from "connection";
import { generateDownloadUrlForAttachment } from "@/utils/s3";

export const downloadAttachmentService = async({attachment_id}:{attachment_id: string}) => {
    const attachmentId = Number(attachment_id);
    const attachment = await prisma.attachment.findUnique({
        where: {attachment_id: attachmentId}
    });
    
    if(!attachment) throw {msg: 'File not found on server, please contact administrator', status: 404};
    
    const downloadUrl = await generateDownloadUrlForAttachment(attachment.file_path);
    
    return {
        ...attachment,
        download_url: downloadUrl
    };
}