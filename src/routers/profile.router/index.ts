import { editUserProfile, getMyAnswers, getMyQuestions, getMySavedQuestions, getUserProfile } from "@/controllers/profile.controller";
import { uploader } from "@/middleware/uploader";
import { uploadProfilePicture } from "@/middleware/uploader.profile.picture";
import { uploaderS3ProfilePicture } from "@/middleware/uploader.s3";
import { verifyUserToken } from "@/middleware/verify.token";
import { Router } from "express";

const router = Router();

router.get('/', verifyUserToken, getUserProfile);
router.patch('/', verifyUserToken, uploaderS3ProfilePicture, editUserProfile);
router.get('/questions', verifyUserToken, getMyQuestions);
router.get('/answers', verifyUserToken, getMyAnswers);
router.get('/saved', verifyUserToken, getMySavedQuestions);

export default router;