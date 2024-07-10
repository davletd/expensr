// src/routes/expense.ts
import { Router } from 'express';
import { ExpenseController } from '../controllers/expenseController';
import { checkJwt } from '../middleware/auth';

const router = Router();

router.get('/expenses', [checkJwt], ExpenseController.getExpenses);
router.post('/expenses', [checkJwt], ExpenseController.createExpense);
router.put('/expenses/:id', [checkJwt], ExpenseController.updateExpense);
router.delete('/expenses/:id', [checkJwt], ExpenseController.deleteExpense);
router.get('/expenses/summary', [checkJwt], ExpenseController.getSummary);
router.get('/expenses/spike', [checkJwt], ExpenseController.checkSpendingSpike);

export default router;
