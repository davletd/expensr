// src/utils/report.ts
import { Expense } from '../../entities/Expense';
import { Between, Repository } from 'typeorm';
import { AppDataSource } from '../../ormconfig';

const expenseRepository = AppDataSource.getRepository(Expense);

export const generateMonthlyReport = async (userId: string) => {
  const date = new Date();
  const firstDayOfMonth = new Date(date.getFullYear(), date.getMonth(), 1);
  const lastDayOfMonth = new Date(date.getFullYear(), date.getMonth() + 1, 0);

  const expenses = await expenseRepository.find({
    where: {
      user: { id: userId },
      date: Between(firstDayOfMonth, lastDayOfMonth),
    },
  });

  const categoryTotals: { [category: string]: number } = {};

  expenses.forEach(expense => {
    if (categoryTotals[expense.category]) {
      categoryTotals[expense.category] += expense.amount;
    } else {
      categoryTotals[expense.category] = expense.amount;
    }
  });

  const categories = Object.keys(categoryTotals);
  if (categories.length === 0) {
    return { highestSpendingCategory: null, lowestSpendingCategory: null, categoryTotals: {} };
  }

  const highestSpendingCategory = categories.reduce((a, b) => categoryTotals[a] > categoryTotals[b] ? a : b);
  const lowestSpendingCategory = categories.reduce((a, b) => categoryTotals[a] < categoryTotals[b] ? a : b);

  return {
    highestSpendingCategory,
    lowestSpendingCategory,
    categoryTotals,
  };
};
