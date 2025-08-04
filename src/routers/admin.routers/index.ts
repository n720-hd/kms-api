import Router from 'express';
import { approvePendingAnswer, approvePendingQuestion, createNewDivision, getAllAnswerList, getAllDivisions, getAllUsers, getDashboardStatistics, getDeletedQuestions, getMaintenanceMode, getRecentQuestions, getRecentUsers, getUserRole, setMaintenanceMode, setUserDivision, setUserRole, takeDownQuestion } from '@/controllers/admin.controller';
import { verifyUserToken } from '@/middleware/verify.token';

const router = Router();

router.post('/maintenance', verifyUserToken, setMaintenanceMode);
router.get('/maintenance', verifyUserToken, getMaintenanceMode);
router.post('/takedown', verifyUserToken, takeDownQuestion);
router.get('/users', verifyUserToken, getAllUsers);
router.post('/approve', verifyUserToken, approvePendingQuestion);
router.post('/answer/approve', verifyUserToken,approvePendingAnswer);
router.get('/answers', verifyUserToken, getAllAnswerList);
router.get('/roles', verifyUserToken, getUserRole);
router.patch('/role', verifyUserToken, setUserRole);
router.get('/divisions', verifyUserToken, getAllDivisions);
router.post('/division', verifyUserToken, createNewDivision);
router.patch('/division', verifyUserToken, setUserDivision);
router.post('/division', verifyUserToken, createNewDivision);
router.get('/questions/archive', verifyUserToken, getDeletedQuestions);
router.get('/users/recent', verifyUserToken, getRecentUsers);
router.get('/questions/recent', verifyUserToken, getRecentQuestions);
router.get('/dashboard/statistics', verifyUserToken, getDashboardStatistics);


export default router;