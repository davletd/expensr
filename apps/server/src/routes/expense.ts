// src/routes/expense.ts
import { Router } from 'express';
import { ExpenseController } from '../controllers/expenseController';
import { checkJwt } from '../middleware/auth';

const router = Router();
/**
 * @swagger
 * tags:
 *   name: Expenses
 *   description: Expense management
 */

/**
 * @swagger
 * /expenses:
 *   get:
 *     summary: Retrieve a list of expenses
 *     tags: [Expenses]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: query
 *         name: startDate
 *         schema:
 *           type: string
 *           format: date
 *         description: Start date for filtering expenses
 *       - in: query
 *         name: endDate
 *         schema:
 *           type: string
 *           format: date
 *         description: End date for filtering expenses
 *       - in: query
 *         name: category
 *         schema:
 *           type: string
 *         description: Category for filtering expenses
 *     responses:
 *       200:
 *         description: A list of expenses
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Expense'
 *       401:
 *         description: Unauthorized
 */
router.get('/expenses', [checkJwt], ExpenseController.getExpenses);

/**
 * @swagger
 * /expenses/{id}:
 *   put:
 *     summary: Update an expense
 *     tags: [Expenses]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: Expense ID
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Expense'
 *     responses:
 *       200:
 *         description: The updated expense
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Expense'
 *       401:
 *         description: Unauthorized
 *       404:
 *         description: Expense not found
 */
router.put('/expenses/:id', [checkJwt], ExpenseController.updateExpense);

/**
 * @swagger
 * /expenses/{id}:
 *   delete:
 *     summary: Delete an expense
 *     tags: [Expenses]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: Expense ID
 *     responses:
 *       204:
 *         description: Expense successfully deleted
 *       401:
 *         description: Unauthorized
 *       404:
 *         description: Expense not found
 */
router.delete('/expenses/:id', [checkJwt], ExpenseController.deleteExpense);

/**
 * @swagger
 * /expenses/summary:
 *   get:
 *     summary: Get a summary of expenses
 *     tags: [Expenses]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: Expense summary
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 totalAmount:
 *                   type: number
 *                 categorySummary:
 *                   type: object
 *                   additionalProperties:
 *                     type: number
 *       401:
 *         description: Unauthorized
 */
router.get('/expenses/summary', [checkJwt], ExpenseController.getSummary);

/**
 * @swagger
 * /expenses/spike:
 *   get:
 *     summary: Check for spending spikes
 *     tags: [Expenses]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: Spending spike analysis
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 hasSpike:
 *                   type: boolean
 *                 spikeAmount:
 *                   type: number
 *                 averageSpending:
 *                   type: number
 *       401:
 *         description: Unauthorized
 */
router.get('/expenses/spike', [checkJwt], ExpenseController.checkSpendingSpike);

/**
 * @swagger
 * /expenses/report:
 *   get:
 *     summary: Get a monthly expense report
 *     tags: [Expenses]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: query
 *         name: year
 *         required: true
 *         schema:
 *           type: integer
 *         description: Year for the report
 *       - in: query
 *         name: month
 *         required: true
 *         schema:
 *           type: integer
 *         description: Month for the report (1-12)
 *     responses:
 *       200:
 *         description: Monthly expense report
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 month:
 *                   type: string
 *                 totalSpending:
 *                   type: number
 *                 categories:
 *                   type: array
 *                   items:
 *                     type: object
 *                     properties:
 *                       category:
 *                         type: string
 *                       amount:
 *                         type: number
 *                 highestSpending:
 *                   type: object
 *                   properties:
 *                     category:
 *                       type: string
 *                     amount:
 *                       type: number
 *                 lowestSpending:
 *                   type: object
 *                   properties:
 *                     category:
 *                       type: string
 *                     amount:
 *                       type: number
 *       401:
 *         description: Unauthorized
 */
router.get('/expenses/report', [checkJwt], ExpenseController.getMonthlyReport);

export default router;
