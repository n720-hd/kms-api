"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const attachment_controller_1 = require("../../controllers/attachment.controller");
const express_1 = require("express");
const router = (0, express_1.Router)();
router.get('/download/:attachment_id', attachment_controller_1.downloadAttachment);
exports.default = router;
