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
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.ExpenseController = void 0;
const ormconfig_1 = require("../ormconfig");
const Expense_1 = require("../entities/Expense");
class ExpenseController {
}
exports.ExpenseController = ExpenseController;
_a = ExpenseController;
ExpenseController.getExpenses = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    console.log("getExpenses");
    const userId = res.locals.jwtPayload.userId;
    const expenseRepository = ormconfig_1.AppDataSource.getRepository(Expense_1.Expense);
    const expenses = yield expenseRepository.find({ where: { user: { id: userId } } });
    return res.status(200).json(expenses);
});
ExpenseController.createExpense = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { date, amount, category, description } = req.body;
    const userId = res.locals.jwtPayload.userId;
    const expenseRepository = ormconfig_1.AppDataSource.getRepository(Expense_1.Expense);
    const expense = new Expense_1.Expense();
    expense.date = new Date(date);
    expense.amount = amount;
    expense.category = category;
    expense.description = description;
    expense.user = userId;
    yield expenseRepository.save(expense);
    return res.status(201).json(expense);
});
ExpenseController.updateExpense = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const { date, amount, category, description } = req.body;
    const userId = res.locals.jwtPayload.userId;
    const expenseRepository = ormconfig_1.AppDataSource.getRepository(Expense_1.Expense);
    let expense = yield expenseRepository.findOne({ where: { id, user: { id: userId } } });
    if (!expense) {
        return res.status(404).send('Expense not found');
    }
    expense.date = new Date(date);
    expense.amount = amount;
    expense.category = category;
    expense.description = description;
    yield expenseRepository.save(expense);
    return res.status(200).json(expense);
});
ExpenseController.deleteExpense = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const userId = res.locals.jwtPayload.userId;
    const expenseRepository = ormconfig_1.AppDataSource.getRepository(Expense_1.Expense);
    let expense = yield expenseRepository.findOne({ where: { id, user: { id: userId } } });
    if (!expense) {
        return res.status(404).send('Expense not found');
    }
    yield expenseRepository.remove(expense);
    return res.status(204).send();
});
ExpenseController.getSummary = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { startDate, endDate } = req.query;
    const userId = res.locals.jwtPayload.userId;
    const expenseRepository = ormconfig_1.AppDataSource.getRepository(Expense_1.Expense);
    const query = expenseRepository.createQueryBuilder('expense')
        .select('expense.category', 'category')
        .addSelect('SUM(expense.amount)', 'totalAmount')
        .where('expense.userId = :userId', { userId })
        .andWhere('expense.date BETWEEN :startDate AND :endDate', { startDate, endDate })
        .groupBy('expense.category');
    const summary = yield query.getRawMany();
    return res.status(200).json(summary);
});
