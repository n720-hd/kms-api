"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importStar(require("express"));
const cors_1 = __importDefault(require("cors"));
const config_1 = require("./config");
const path_1 = __importDefault(require("path"));
const routers_1 = require("./routers");
const config_checking_1 = require("./middleware/config.checking");
const helmet_1 = __importDefault(require("helmet"));
const cookie_parser_1 = __importDefault(require("cookie-parser"));
class App {
    constructor() {
        this.app = (0, express_1.default)();
        this.configure();
        this.routes();
        this.handleError();
    }
    configure() {
        this.app.use((0, cors_1.default)({
            origin: process.env.CLIENT_URL || 'http://localhost:3000',
            credentials: true,
        }));
        this.app.use((0, express_1.json)());
        this.app.use((0, express_1.urlencoded)({ extended: true }));
        this.app.use(config_checking_1.configChecking);
        this.app.use((0, helmet_1.default)());
        this.app.use((0, cookie_parser_1.default)());
    }
    handleError() {
        // Not found handler
        this.app.use((req, res, next) => {
            if (req.path.includes('/api/')) {
                res.status(404).json({ error: 'Not found!' });
            }
            else {
                next();
            }
        });
        // General error handler
        this.app.use((err, req, res, next) => {
            if (req.path.includes('/api/')) {
                console.error('Error:', err);
                // Send a JSON response with error details for API requests
                res.status(err.status || 500).json({
                    error: 'An internal server error occurred.',
                    message: err.msg || 'Something went wrong',
                    stack: process.env.NODE_ENV === 'development' ? err.stack : undefined,
                });
            }
            else {
                next(err);
            }
        });
    }
    routes() {
        this.app.use(routers_1.router);
    }
    start() {
        process.env.TZ = 'Asia/Jakarta';
        // Expose the "public" directory
        const publicDirectory = path_1.default.join(__dirname, "public/images/proof-of-payment");
        // console.log(publicDirectory)
        this.app.use("/images", express_1.default.static(publicDirectory));
        const date = new Date();
        console.log('Current timezone: ', process.env.TZ);
        console.log('Current server time: ', date.toLocaleString('en-US', { timeZone: process.env.TZ }));
        this.app.listen(config_1.PORT, () => {
            console.log(`  ➜ [ ϟϟ API ϟϟ ] Local: http://localhost:${config_1.PORT}/`);
        });
    }
}
exports.default = App;
