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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthController = void 0;
const ormconfig_1 = require("../ormconfig");
const bcryptjs_1 = __importDefault(require("bcryptjs"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const User_1 = require("../entities/User");
class AuthController {
}
exports.AuthController = AuthController;
_a = AuthController;
AuthController.register = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { email, username, password } = req.body;
    const userRepository = ormconfig_1.AppDataSource.getRepository(User_1.User);
    const user = new User_1.User();
    user.email = email;
    user.username = username;
    user.password = yield bcryptjs_1.default.hash(password, 10);
    try {
        yield userRepository.save(user);
    }
    catch (e) {
        console.log(e);
        return res.status(409).send('Email already in use');
    }
    return res.status(201).send('User created');
});
AuthController.login = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { username, password } = req.body;
    const userRepository = ormconfig_1.AppDataSource.getRepository(User_1.User);
    const user = yield userRepository.findOne({ where: { username } });
    if (!user) {
        return res.status(401).send('Invalid credentials');
    }
    const validPassword = yield bcryptjs_1.default.compare(password, user.password);
    if (!validPassword) {
        return res.status(401).send('Invalid credentials');
    }
    const token = jsonwebtoken_1.default.sign({ userId: user.id }, 'your_jwt_secret', {
        expiresIn: '1h',
    });
    return res.status(200).json({ token });
});
