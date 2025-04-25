import { authUser, changePassword, createAdmin, createCreator, createUser, keepLogin, loginAdmin, loginCreator, loginUser, registerAdmin, registerCreator, registerUser } from "@/controllers/auth.controller";
import { verifyUserToken } from "@/middleware/verify.token";
import { Router } from "express";


const router = Router()

// router.get('/',verifyUserToken, authUser);
router.post('/register/admin', registerAdmin);
router.post('/create/admin', createAdmin);
router.post('/register/user', registerUser);
router.post('/create/user', createUser);
router.post('/register/creator', registerCreator);
router.post('/create/creator', createCreator)
router.post('/login/admin', loginAdmin);
router.post('/login/user', loginUser);
router.post('/login/creator', loginCreator);
router.get('/', verifyUserToken, keepLogin);
router.patch('/change-password', verifyUserToken, changePassword);

export default router