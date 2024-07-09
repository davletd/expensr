"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// src/routes/expense.ts
const express_1 = require("express");
const expenseController_1 = require("../controllers/expenseController");
const auth_1 = require("../middleware/auth");
const router = (0, express_1.Router)();
router.get('/expenses', [auth_1.checkJwt], expenseController_1.ExpenseController.getExpenses);
router.post('/expenses', [auth_1.checkJwt], expenseController_1.ExpenseController.createExpense);
router.put('/expenses/:id', [auth_1.checkJwt], expenseController_1.ExpenseController.updateExpense);
router.delete('/expenses/:id', [auth_1.checkJwt], expenseController_1.ExpenseController.deleteExpense);
router.get('/expenses/summary', [auth_1.checkJwt], expenseController_1.ExpenseController.getSummary);
exports.default = router;
