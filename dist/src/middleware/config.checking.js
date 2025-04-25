"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.configChecking = void 0;
const connection_1 = require("../../connection");
const configChecking = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        if (req.path.includes('/admin'))
            return next();
        const is_maintenance = yield connection_1.prisma.config.findFirst({
            where: {
                name: 'is_maintenance',
                status: true
            }
        });
        if (is_maintenance)
            throw { msg: 'The system is under maintenance, please try again later', status: 503 };
        next();
    }
    catch (error) {
        next(error);
    }
});
exports.configChecking = configChecking;
