"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppDataSource = void 0;
const typeorm_1 = require("typeorm");
const User_1 = require("./entities/User");
const Expense_1 = require("./entities/Expense");
exports.AppDataSource = new typeorm_1.DataSource({
    type: 'postgres',
    host: 'localhost',
    port: 5432,
    username: 'expensrDBUser',
    password: 'phYQ!CLK6AdyPoJ_D-TeRa!y',
    database: 'expensrDB',
    synchronize: true,
    logging: false,
    entities: [User_1.User, Expense_1.Expense],
    migrations: [],
    subscribers: [],
});
