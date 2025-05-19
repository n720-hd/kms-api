import { downloadAttachment } from "@/controllers/attachment.controller";
import { Router } from "express";

const router = Router();

router.get('/download/:attachment_id', downloadAttachment)

export default router;