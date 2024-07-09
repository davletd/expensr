// apps/backend/src/seeds/seed.ts
import { AppDataSource } from '../ormconfig';
import { User } from '../entities/User';
import { Expense } from '../entities/Expense';
import bcrypt from 'bcryptjs';

const seed = async () => {
  await AppDataSource.initialize();

  const userRepository = AppDataSource.getRepository(User);
  const expenseRepository = AppDataSource.getRepository(Expense);

  // Create example users
  const users = [
    {
      email: 'user1@example.com',
			username: 'user1@example.com',
      password: await bcrypt.hash('password1', 10),
    },
    {
      email: 'user2@example.com',
			username: 'user2@example.com',
      password: await bcrypt.hash('password2', 10),
    },
  ];

  const savedUsers = await userRepository.save(users);

  // Create example expenses
  const expenses = [
    {
      date: new Date('2023-07-01'),
      amount: 50,
      category: 'Food',
      description: 'Lunch',
      user: savedUsers[0],
    },
    {
      date: new Date('2023-07-02'),
      amount: 20,
      category: 'Transport',
      description: 'Taxi',
      user: savedUsers[0],
    },
    {
      date: new Date('2023-07-03'),
      amount: 100,
      category: 'Shopping',
      description: 'Groceries',
      user: savedUsers[1],
    },
    {
      date: new Date('2023-07-04'),
      amount: 150,
      category: 'Entertainment',
      description: 'Concert',
      user: savedUsers[1],
    },
		{
			date: new Date('2023-07-01'),
			amount: 50,
			category: 'Food',
			description: 'Lunch',
			user: savedUsers[0],
		},
		{
			date: new Date('2023-07-02'),
			amount: 20,
			category: 'Transport',
			description: 'Taxi',
			user: savedUsers[0],
		},
		{
			date: new Date('2023-07-03'),
			amount: 100,
			category: 'Shopping',
			description: 'Groceries',
			user: savedUsers[1],
		},
		{
			date: new Date('2023-07-04'),
			amount: 150,
			category: 'Entertainment',
			description: 'Concert',
			user: savedUsers[1],
		},
		{
			date: new Date('2023-07-05'),
			amount: 200,
			category: 'Rent',
			description: 'Monthly rent',
			user: savedUsers[0],
		},
		{
			date: new Date('2023-07-06'),
			amount: 30,
			category: 'Utilities',
			description: 'Electricity bill',
			user: savedUsers[0],
		},
		{
			date: new Date('2023-07-07'),
			amount: 40,
			category: 'Food',
			description: 'Dinner',
			user: savedUsers[1],
		},
		{
			date: new Date('2023-07-08'),
			amount: 25,
			category: 'Transport',
			description: 'Bus fare',
			user: savedUsers[1],
		},
		{
			date: new Date('2023-07-09'),
			amount: 80,
			category: 'Shopping',
			description: 'Clothes',
			user: savedUsers[0],
		},
		{
			date: new Date('2023-07-10'),
			amount: 60,
			category: 'Entertainment',
			description: 'Movie',
			user: savedUsers[0],
		},
		{
			date: new Date('2023-07-11'),
			amount: 150,
			category: 'Food',
			description: 'Groceries',
			user: savedUsers[1],
		},
		{
			date: new Date('2023-07-12'),
			amount: 35,
			category: 'Transport',
			description: 'Gas',
			user: savedUsers[1],
		},
		{
			date: new Date('2023-07-13'),
			amount: 100,
			category: 'Rent',
			description: 'Monthly rent',
			user: savedUsers[0],
		},
		{
			date: new Date('2023-07-14'),
			amount: 20,
			category: 'Utilities',
			description: 'Water bill',
			user: savedUsers[0],
		},
		{
			date: new Date('2023-07-15'),
			amount: 70,
			category: 'Food',
			description: 'Restaurant',
			user: savedUsers[1],
		},
		{
			date: new Date('2023-07-16'),
			amount: 50,
			category: 'Transport',
			description: 'Train ticket',
			user: savedUsers[1],
		},
		{
			date: new Date('2023-07-17'),
			amount: 120,
			category: 'Shopping',
			description: 'Electronics',
			user: savedUsers[0],
		},
		{
			date: new Date('2023-07-18'),
			amount: 90,
			category: 'Entertainment',
			description: 'Theater',
			user: savedUsers[0],
		},
		{
			date: new Date('2023-07-19'),
			amount: 45,
			category: 'Food',
			description: 'Breakfast',
			user: savedUsers[1],
		},
		{
			date: new Date('2023-07-20'),
			amount: 55,
			category: 'Transport',
			description: 'Parking',
			user: savedUsers[1],
		},
		{
			date: new Date('2023-07-21'),
			amount: 110,
			category: 'Shopping',
			description: 'Furniture',
			user: savedUsers[0],
		},
		{
			date: new Date('2023-07-22'),
			amount: 75,
			category: 'Entertainment',
			description: 'Concert tickets',
			user: savedUsers[0],
		},
		{
			date: new Date('2023-07-23'),
			amount: 50,
			category: 'Food',
			description: 'Dinner',
			user: savedUsers[1],
		},
		{
			date: new Date('2023-07-24'),
			amount: 25,
			category: 'Transport',
			description: 'Taxi',
			user: savedUsers[1],
		},
		{
			date: new Date('2023-07-25'),
			amount: 60,
			category: 'Shopping',
			description: 'Books',
			user: savedUsers[0],
		},
		{
      date: new Date('2023-07-01'),
      amount: 50,
      category: 'Food',
      description: 'Lunch',
      user: savedUsers[0],
    },
    {
      date: new Date('2023-08-02'),
      amount: 20,
      category: 'Transport',
      description: 'Taxi',
      user: savedUsers[0],
    },
    {
      date: new Date('2023-08-03'),
      amount: 100,
      category: 'Shopping',
      description: 'Groceries',
      user: savedUsers[1],
    },
    {
      date: new Date('2023-08-04'),
      amount: 150,
      category: 'Entertainment',
      description: 'Concert',
      user: savedUsers[1],
    },
		{
			date: new Date('2023-08-01'),
			amount: 50,
			category: 'Food',
			description: 'Lunch',
			user: savedUsers[0],
		},
		{
			date: new Date('2023-08-02'),
			amount: 20,
			category: 'Transport',
			description: 'Taxi',
			user: savedUsers[0],
		},
		{
			date: new Date('2023-08-03'),
			amount: 100,
			category: 'Shopping',
			description: 'Groceries',
			user: savedUsers[1],
		},
		{
			date: new Date('2023-08-04'),
			amount: 150,
			category: 'Entertainment',
			description: 'Concert',
			user: savedUsers[1],
		},
		{
			date: new Date('2023-08-05'),
			amount: 200,
			category: 'Rent',
			description: 'Monthly rent',
			user: savedUsers[0],
		},
		{
			date: new Date('2023-08-06'),
			amount: 30,
			category: 'Utilities',
			description: 'Electricity bill',
			user: savedUsers[0],
		},
		{
			date: new Date('2023-08-07'),
			amount: 40,
			category: 'Food',
			description: 'Dinner',
			user: savedUsers[1],
		},
		{
			date: new Date('2023-08-08'),
			amount: 25,
			category: 'Transport',
			description: 'Bus fare',
			user: savedUsers[1],
		},
		{
			date: new Date('2023-08-09'),
			amount: 80,
			category: 'Shopping',
			description: 'Clothes',
			user: savedUsers[0],
		},
		{
			date: new Date('2023-08-10'),
			amount: 60,
			category: 'Entertainment',
			description: 'Movie',
			user: savedUsers[0],
		},
		{
			date: new Date('2023-08-11'),
			amount: 150,
			category: 'Food',
			description: 'Groceries',
			user: savedUsers[1],
		},
		{
			date: new Date('2023-08-12'),
			amount: 35,
			category: 'Transport',
			description: 'Gas',
			user: savedUsers[1],
		},
		{
			date: new Date('2023-08-13'),
			amount: 100,
			category: 'Rent',
			description: 'Monthly rent',
			user: savedUsers[0],
		},
		{
			date: new Date('2023-08-14'),
			amount: 20,
			category: 'Utilities',
			description: 'Water bill',
			user: savedUsers[0],
		},
		{
			date: new Date('2023-08-15'),
			amount: 70,
			category: 'Food',
			description: 'Restaurant',
			user: savedUsers[1],
		},
		{
			date: new Date('2023-08-16'),
			amount: 50,
			category: 'Transport',
			description: 'Train ticket',
			user: savedUsers[1],
		},
		{
			date: new Date('2023-08-17'),
			amount: 120,
			category: 'Shopping',
			description: 'Electronics',
			user: savedUsers[0],
		},
		{
			date: new Date('2023-08-18'),
			amount: 90,
			category: 'Entertainment',
			description: 'Theater',
			user: savedUsers[0],
		},
		{
			date: new Date('2023-08-19'),
			amount: 45,
			category: 'Food',
			description: 'Breakfast',
			user: savedUsers[1],
		},
		{
			date: new Date('2023-08-20'),
			amount: 55,
			category: 'Transport',
			description: 'Parking',
			user: savedUsers[1],
		},
		{
			date: new Date('2023-08-21'),
			amount: 110,
			category: 'Shopping',
			description: 'Furniture',
			user: savedUsers[0],
		},
		{
			date: new Date('2023-08-22'),
			amount: 75,
			category: 'Entertainment',
			description: 'Concert tickets',
			user: savedUsers[0],
		},
		{
			date: new Date('2023-08-23'),
			amount: 50,
			category: 'Food',
			description: 'Dinner',
			user: savedUsers[1],
		},
		{
			date: new Date('2023-08-24'),
			amount: 25,
			category: 'Transport',
			description: 'Taxi',
			user: savedUsers[1],
		},
		{
			date: new Date('2023-08-25'),
			amount: 60,
			category: 'Shopping',
			description: 'Books',
			user: savedUsers[0],
		}
  ];

  await expenseRepository.save(expenses);

  console.log('Database seeded successfully');
  await AppDataSource.destroy();
};

seed().catch((err) => {
  console.error('Error seeding database', err);
  process.exit(1);
});
