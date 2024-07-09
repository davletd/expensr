"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.checkJwt = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const checkJwt = (req, res, next) => {
    const token = req.headers['auth'];
    let jwtPayload;
    try {
        jwtPayload = jsonwebtoken_1.default.verify(token, 'your_jwt_secret');
        res.locals.jwtPayload = jwtPayload;
    }
    catch (error) {
        return res.status(401).send('Unauthorized');
    }
    next();
};
exports.checkJwt = checkJwt;
