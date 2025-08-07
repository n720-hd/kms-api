import { createAnswer, editAnswer, getAnswerToBeEdited } from '@/controllers/answer.controller';
import { uploader } from '@/middleware/uploader';
import { uploaderS3 } from '@/middleware/uploader.s3';
import { verifyUserToken } from '@/middleware/verify.token';
import Router from 'express';

const router = Router();

router.post('/', verifyUserToken, uploaderS3, createAnswer);
router.patch('/edit', verifyUserToken, uploaderS3, editAnswer);
router.get('/edit/:answer_id', verifyUserToken, getAnswerToBeEdited);

export default router