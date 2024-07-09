import React from 'react';
import { useQuery } from 'react-query';

interface Expense {
  id: number;
  date: string;
  amount: number;
  category: string;
  description: string;
}

const ExpenseList: React.FC = () => {
  const { data: expenses, isLoading, error } = useQuery<Expense[]>('expenses', () =>
    fetch('/api/expenses', {
      headers: { Authorization: `Bearer ${localStorage.getItem('token')}` },
    }).then((res) => res.json())
  );

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>An error occurred</div>;

  return (
    <div>
      <h2>Expenses</h2>
      <ul>
        {expenses?.map((expense) => (
          <li key={expense.id}>
            {expense.date} - {expense.category}: ${expense.amount} ({expense.description})
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ExpenseList;