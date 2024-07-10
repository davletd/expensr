// apps/backend/src/test-setup.ts
import { AppDataSource } from '../ormconfig';
import { User } from '../entities/User';
import { Expense } from '../entities/Expense';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import app from '../app';
import supertest from 'supertest';
import { Server } from 'http';

const request = supertest(app);

let server: Server;

export const setupTestServer = () => {
  beforeAll((done) => {
    server = app.listen(3000, () => {
      console.log('Test server running on port 3000');
      done();
    });
  });

  afterAll((done) => {
    server.close(() => {
      console.log('Test server stopped');
      done();
    });
  });
};

export const setupTestDatabase = async () => {
	console.log('setupTestDatabase');
  await AppDataSource.initialize();
	console.log('initialize');
  await AppDataSource.synchronize(true);

  const userRepository = AppDataSource.getRepository(User);
  const expenseRepository = AppDataSource.getRepository(Expense);

  const password = await bcrypt.hash('password1', 10);
  const user1 = userRepository.create({ email: 'user1@example.com', username: 'user1@example.com', password });
  const user2 = userRepository.create({ email: 'user2@example.com', username: 'user2@example.com', password });

  await userRepository.save([user1, user2]);

  const expenses = [
    { date: new Date('2023-07-01'), amount: 50, category: 'Food', description: 'Lunch', user: user1 },
    { date: new Date('2023-07-02'), amount: 20, category: 'Transport', description: 'Taxi', user: user1 },
    { date: new Date('2023-07-03'), amount: 100, category: 'Shopping', description: 'Groceries', user: user2 },
    { date: new Date('2023-07-04'), amount: 150, category: 'Entertainment', description: 'Concert', user: user2 },
  ];

  await expenseRepository.save(expenses);

  return { user1, user2 };
};

export const generateToken = (userId: string) => {
  return jwt.sign({ userId: userId }, 'your_jwt_secret', { expiresIn: '1h' });
};

export default request;
