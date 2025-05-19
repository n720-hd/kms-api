import express, { Router } from "express";
import authRouters from './auth.routers/index';
import adminRouters from './admin.routers/index';
import questionRouters from './question.routers/index';
import answerRouters from './answer.routers/index';
import attachmentRouters from './attachment.routers/index';

export const router = Router();

router.use('/api/auth', authRouters);
router.use('/api/admin', adminRouters);
router.use('/api/question', questionRouters);
router.use('/api/answer', answerRouters);
router.use('/api/attachment', attachmentRouters)