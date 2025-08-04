import express, { Router } from "express";
import authRouters from './auth.routers/index';
import adminRouters from './admin.routers/index';
import questionRouters from './question.routers/index';
import answerRouters from './answer.routers/index';
import attachmentRouters from './attachment.routers/index';
import profileRouters from './profile.router/index';
import aiRouters from './ai.routers/index';
import chatRouters from './chat.routers/index';

export const router = Router();

router.use('*/attachments', express.static('src/public/attachments', {
  setHeaders: (res, path) => {
    const ext = path.split('.').pop()?.toLowerCase();    
    switch (ext) {
      case 'png':
        res.setHeader('Content-Type', 'image/png');
        break;
      case 'jpg':
      case 'jpeg':
        res.setHeader('Content-Type', 'image/jpeg');
        break;
      case 'gif':
        res.setHeader('Content-Type', 'image/gif');
        break;
      case 'pdf':
        res.setHeader('Content-Type', 'application/pdf');
        res.setHeader('Content-Disposition', 'inline');
        break;
      case 'docx':
        res.setHeader('Content-Type', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document');
        break;
      case 'xlsx':
        res.setHeader('Content-Type', 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet');
        break;
      default:
        res.setHeader('Content-Type', 'application/octet-stream');
    }
  }
}));
router.use('/api/auth', authRouters);
router.use('/api/admin', adminRouters);
router.use('/api/question', questionRouters);
router.use('/api/answer', answerRouters);
router.use('/api/attachment', attachmentRouters);
router.use('/api/profile', profileRouters);
router.use('/api/ai', aiRouters);
router.use('/api/chat', chatRouters);