import { prisma } from "connection";
import fs from 'fs/promises';
import path from "path";

export const downloadAttachmentService = async({attachment_id}:{attachment_id: string}) => {
const attachmentId = Number(attachment_id);
const attachment = await prisma.attachment.findUnique({
    where: {attachment_id: attachmentId}
})
if(!attachment) throw {msg: 'File not found on server, please contact administrator', status: 404};
try {
    await fs.access(attachment.file_path);
} catch {
    throw {msg: 'File not found on server, please contact administrator', status: 404};
}
return attachment
}