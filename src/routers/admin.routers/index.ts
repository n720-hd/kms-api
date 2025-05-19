import Router from 'express';
import { approvePendingAnswer, approvePendingQuestion, getAllDivisions, getAllUsers, getUserRole, setMaintenanceMode, setUserDivision, setUserRole, takeDownQuestion } from '@/controllers/admin.controller';
import { verifyUserToken } from '@/middleware/verify.token';

const router = Router();

router.post('/maintenance', verifyUserToken, setMaintenanceMode);
router.post('/takedown', verifyUserToken, takeDownQuestion);
router.get('/users', verifyUserToken, getAllUsers);
router.post('/approve', verifyUserToken, approvePendingQuestion);
router.post('/answer/approve', verifyUserToken,approvePendingAnswer);
router.get('/roles', verifyUserToken, getUserRole);
router.patch('/role', verifyUserToken, setUserRole);
router.get('/divisions', verifyUserToken, getAllDivisions);
router.patch('/division', verifyUserToken, setUserDivision);

export default router;