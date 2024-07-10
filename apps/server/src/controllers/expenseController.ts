// src/controllers/expenseController.ts
import { Request, Response } from 'express';
import { AppDataSource } from '../ormconfig';
import { Expense } from '../entities/Expense';

export class ExpenseController {
  static getExpenses = async (req: Request, res: Response) => {
		console.log("getExpenses");
    const userId = res.locals.jwtPayload.userId;
    const expenseRepository = AppDataSource.getRepository(Expense);

    const { category, startDate, endDate } = req.query;

    console.log("category:", category, startDate, endDate);
    console.log("date", new Date(startDate as string))
    const queryBuilder = expenseRepository.createQueryBuilder('expense')
      .where('expense.userId = :userId', { userId });

    if (category) {
      queryBuilder.andWhere('expense.category = :category', { category });
    }

    if (startDate) {
      queryBuilder.andWhere('expense.date >= :startDate', { startDate: new Date(startDate as string) });
    }

    if (endDate) {
      queryBuilder.andWhere('expense.date <= :endDate', { endDate: new Date(endDate as string) });
    }

    const expenses = await queryBuilder.getMany();
    return res.status(200).json(expenses);
  };

  static createExpense = async (req: Request, res: Response) => {
    const { date, amount, category, description } = req.body;
    const userId = res.locals.jwtPayload.userId;
    const expenseRepository = AppDataSource.getRepository(Expense);

    const expense = new Expense();
    expense.date = new Date(date);
    expense.amount = amount;
    expense.category = category;
    expense.description = description;
    expense.user = userId;

    await expenseRepository.save(expense);
    return res.status(201).json(expense);
  };

  static updateExpense = async (req: Request, res: Response) => {
    const { id } = req.params;
    const { date, amount, category, description } = req.body;
    const userId = res.locals.jwtPayload.userId;
    const expenseRepository = AppDataSource.getRepository(Expense);

    let expense = await expenseRepository.findOne({ where: { id, user: { id: userId } } });
    if (!expense) {
      return res.status(404).send('Expense not found');
    }

    expense.date = new Date(date);
    expense.amount = amount;
    expense.category = category;
    expense.description = description;

    await expenseRepository.save(expense);
    return res.status(200).json(expense);
  };

  static deleteExpense = async (req: Request, res: Response) => {
    const { id } = req.params;
    const userId = res.locals.jwtPayload.userId;
    const expenseRepository = AppDataSource.getRepository(Expense);

    let expense = await expenseRepository.findOne({ where: { id, user: { id: userId } } });
    if (!expense) {
      return res.status(404).send('Expense not found');
    }

    await expenseRepository.remove(expense);
    return res.status(204).send();
  };

  static getSummary = async (req: Request, res: Response) => {
    const { startDate, endDate } = req.query;
    const userId = res.locals.jwtPayload.userId;
    const expenseRepository = AppDataSource.getRepository(Expense);

    const query = expenseRepository.createQueryBuilder('expense')
      .select('expense.category', 'category')
      .addSelect('SUM(expense.amount)', 'totalAmount')
      .where('expense.userId = :userId', { userId })
      .andWhere('expense.date BETWEEN :startDate AND :endDate', { startDate, endDate })
      .groupBy('expense.category');

    const summary = await query.getRawMany();
    return res.status(200).json(summary);
  };
}
