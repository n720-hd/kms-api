import Router from 'express';
import { getAllUsers, setMaintenanceMode, takeDownPost } from '@/controllers/admin.controller';
import { verifyUserToken } from '@/middleware/verify.token';

const router = Router();

router.post('/maintenance', verifyUserToken, setMaintenanceMode);
router.post('/takedown', verifyUserToken, takeDownPost);
router.get('/users', verifyUserToken, getAllUsers);
router.post('/')

export default router;