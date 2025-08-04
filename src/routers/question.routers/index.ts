import { createComment, createFeedback, createNewTag, createQuestion, deleteTag, editQuestion, getAllNotifications, getAllQuestionsList, getAllTags, getCollaboratorDivisionList, getCollaboratorList, getLikeStatus, getQuestionDetails, getQuestionEdit, getQuestionFeedback, likeQuestion, markAllNotificationsAsRead, markNotificationAsRead, saveQuestion } from "@/controllers/question.controller";
import { uploader } from "@/middleware/uploader";
import { verifyUserToken } from "@/middleware/verify.token";
import { verifyToken } from "@/utils/jwt";
import { Router } from "express";

const router = Router();

router.get('/', getAllQuestionsList);
router.get('/details/:question_id', getQuestionDetails);
router.get('/tags', getAllTags);
router.post('/tags', createNewTag);
router.patch('/tags/', verifyUserToken, deleteTag);
router.post('/', verifyUserToken, uploader, createQuestion);
router.post('/like', verifyUserToken, likeQuestion);
router.get('/:question_id/like/status', verifyUserToken, getLikeStatus);
router.patch('/', verifyUserToken, uploader, editQuestion);
router.get('/notifications', verifyUserToken, getAllNotifications);
router.post('/comment', verifyUserToken, uploader, createComment);
router.get('/collaborators/personal', verifyUserToken, getCollaboratorList);
router.get('/collaborators/division', verifyUserToken, getCollaboratorDivisionList);
router.put('/notifications/:notificationId/read', verifyUserToken, markNotificationAsRead);
router.put('/notifications/read/all', verifyUserToken, markAllNotificationsAsRead);
router.post('/save', verifyUserToken, saveQuestion);
router.post('/feedback', verifyUserToken, createFeedback);
router.get('/feedback', verifyUserToken, getQuestionFeedback);
router.get('/:question_id/edit', verifyUserToken, getQuestionEdit);
router.get('/:question_id')

export default router;