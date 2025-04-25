"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SampleRouter = void 0;
const express_1 = require("express");
class SampleRouter {
    constructor() {
        this.router = (0, express_1.Router)();
        this.initializeRoutes();
    }
    initializeRoutes() {
    }
    getRouter() {
        return this.router;
    }
}
exports.SampleRouter = SampleRouter;
