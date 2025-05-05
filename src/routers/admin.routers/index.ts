import Router from 'express';
import { approvePendingQuestion, getAllUsers, setMaintenanceMode, takeDownQuestion } from '@/controllers/admin.controller';
import { verifyUserToken } from '@/middleware/verify.token';

const router = Router();

router.post('/maintenance', verifyUserToken, setMaintenanceMode);
router.post('/takedown', verifyUserToken, takeDownQuestion);
router.get('/users', verifyUserToken, getAllUsers);
router.post('/approve', verifyUserToken, approvePendingQuestion)

export default router;