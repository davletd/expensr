
import { Expense } from '../../entities/Expense';
import { Between, Repository } from 'typeorm';
import { AppDataSource } from '../../ormconfig';

const expenseRepository = AppDataSource.getRepository(Expense);

export const calculateAverageSpending = async (userId: string, days: number): Promise<number> => {
  const date = new Date();
  date.setDate(date.getDate() - days);

  const expenses = await expenseRepository.find({
    where: {
      user: { id: userId },
      date: Between(date, new Date()),
    },
  });

  const total = expenses.reduce((sum, expense) => sum + expense.amount, 0);
  return total / days;
};

export const detectSpendingSpike = async (userId: string, days: number, threshold: number): Promise<boolean> => {
  const averageSpending = await calculateAverageSpending(userId, days);

  const date = new Date();
  date.setDate(date.getDate() - 1);

  const yesterdayExpenses = await expenseRepository.find({
    where: {
      user: { id: userId },
      date: Between(date, new Date()),
    },
  });

  const yesterdayTotal = yesterdayExpenses.reduce((sum, expense) => sum + expense.amount, 0);

  return yesterdayTotal > averageSpending * threshold;
};
