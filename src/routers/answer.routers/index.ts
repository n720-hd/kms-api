import { editAnswer } from '@/controllers/answer.controller';
import { createAnswer } from '@/controllers/question.controller';
import { uploader } from '@/middleware/uploader';
import { verifyUserToken } from '@/middleware/verify.token';
import Router from 'express';

const router = Router();

router.post('/', verifyUserToken, uploader, createAnswer);
router.patch('/', verifyUserToken, uploader, editAnswer);

export default router