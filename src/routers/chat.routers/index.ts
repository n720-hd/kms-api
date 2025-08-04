import { deleteMessage, editMessage, getGlobalMessages } from "@/controllers/chat.controller";
import { verifyUserToken } from "@/middleware/verify.token";
import { Router } from "express";

const router = Router();

router.get('/messages', verifyUserToken, getGlobalMessages);
router.put('/messages/:messageId', verifyUserToken, editMessage);
router.delete('/messages/:messageId', verifyUserToken, deleteMessage);

export default router;