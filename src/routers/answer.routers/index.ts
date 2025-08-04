import { createAnswer, editAnswer, getAnswerToBeEdited } from '@/controllers/answer.controller';
import { uploader } from '@/middleware/uploader';
import { verifyUserToken } from '@/middleware/verify.token';
import Router from 'express';

const router = Router();

router.post('/', verifyUserToken, uploader, createAnswer);
router.patch('/edit', verifyUserToken, uploader, editAnswer);
router.get('/edit/:answer_id', verifyUserToken, getAnswerToBeEdited);

export default router