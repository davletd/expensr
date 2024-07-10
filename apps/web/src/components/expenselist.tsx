import React from 'react';
import { useQuery } from 'react-query';
import { format } from 'date-fns';
import { Table, TableHeader, TableRow, TableHead, TableBody, TableCell } from "./table"
import { Badge } from "./badge"
import { DatePickerWithRange } from './datepicker';

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
		<>
			<div className="absolute top-4 right-4 text-white p-4 rounded">
				<DatePickerWithRange className="md:w-1/3" />
			</div>
			<div className="rounded-md border">
							<Table>
								<TableHeader>
									<TableRow>
										<TableHead>Date</TableHead>
										<TableHead>Amount</TableHead>
										<TableHead>Category</TableHead>
										<TableHead>Description</TableHead>
									</TableRow>
								</TableHeader>
								<TableBody>
								{expenses?.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()).map((expense) => (
									<TableRow key={expense.id}>
										<TableCell>{format(expense.date, 'dd-MM-yyyy')}</TableCell>
										<TableCell>${expense.amount}</TableCell>
										<TableCell>
											<Badge variant="secondary">{expense.category}</Badge>
										</TableCell>
										<TableCell>{expense.description}</TableCell>
									</TableRow>
								))}
								</TableBody>
							</Table>
			</div>
	</>
  );
}

export default ExpenseList;