import express, { Router } from "express";
import authRouters from './auth.routers/index'
import adminRouters from './admin.routers/index'

export const router = Router();

router.use('/api/auth', authRouters);
router.use('/api/admin', adminRouters);