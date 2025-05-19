import { createComment, createNewTag, createQuestion, deleteTag, editQuestion, getAllNotifications, getAllQuestionsList, getAllTags } from "@/controllers/question.controller";
import { uploader } from "@/middleware/uploader";
import { verifyUserToken } from "@/middleware/verify.token";
import { verifyToken } from "@/utils/jwt";
import { Router } from "express";

const router = Router();

router.get('/', getAllQuestionsList);
router.get('/tags', getAllTags);
router.post('/tags', createNewTag);
router.patch('/tags/', verifyUserToken, deleteTag);
router.post('/', verifyUserToken, uploader, createQuestion);
router.patch('/', verifyUserToken, uploader, editQuestion)
router.get('/notifications', verifyUserToken, getAllNotifications);
router.post('/comment', verifyUserToken, createComment);

export default router;