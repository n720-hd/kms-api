import { changePassword, createAdmin, createCreator, createUser, forgetPassword, keepLogin, loginAdmin, loginCreator, loginUser, logout, registerAdmin, registerCreator, registerUser } from "@/controllers/auth.controller";
import { verifyUserToken } from "@/middleware/verify.token";
import { Router } from "express";


const router = Router()

router.post('/register/admin', registerAdmin);
router.post('/create/admin', createAdmin);
router.post('/register/user', registerUser);
router.post('/create/user', createUser);
router.post('/register/creator', registerCreator);
router.post('/create/creator', createCreator);
router.post('/login', loginUser);
router.get('/', verifyUserToken, keepLogin);
router.patch('/change-password', verifyUserToken, changePassword);
router.patch('/change-password', verifyUserToken, changePassword);
router.get('/logout', logout);
router.post('/forget', forgetPassword)

export default router