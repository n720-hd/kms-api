"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const admin_controller_1 = require("../../controllers/admin.controller");
const verify_token_1 = require("../../middleware/verify.token");
const router = (0, express_1.default)();
router.post('/maintenance', verify_token_1.verifyUserToken, admin_controller_1.setMaintenanceMode);
router.post('/takedown', verify_token_1.verifyUserToken, admin_controller_1.takeDownQuestion);
router.get('/users', verify_token_1.verifyUserToken, admin_controller_1.getAllUsers);
router.post('/approve', verify_token_1.verifyUserToken, admin_controller_1.approvePendingQuestion);
router.post('/answer/approve', verify_token_1.verifyUserToken, admin_controller_1.approvePendingAnswer);
router.get('/roles', verify_token_1.verifyUserToken, admin_controller_1.getUserRole);
router.patch('/role', verify_token_1.verifyUserToken, admin_controller_1.setUserRole);
router.get('/divisions', verify_token_1.verifyUserToken, admin_controller_1.getAllDivisions);
router.patch('/division', verify_token_1.verifyUserToken, admin_controller_1.setUserDivision);
exports.default = router;
