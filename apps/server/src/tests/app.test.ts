// apps/backend/src/__tests__/expenseController.test.ts
import request, { setupTestDatabase, setupTestServer, generateToken } from './setup';
import { AppDataSource } from '../ormconfig';

describe('ExpenseController', () => {
  let user1Token: string;
  let user2Token: string;

  setupTestServer();

  beforeAll(async () => {
    const { user1, user2 } = await setupTestDatabase();
    console.log(user1, user2)
    user1Token = generateToken(user1.id);
    console.log(user1Token);
    user2Token = generateToken(user2.id);
  });

  afterAll(async () => {
    await AppDataSource.destroy();
  });

  it('should login user1', async () => {
    const userLogin = {
      username: 'user1@example.com',
      password: 'password1'
    };

    const res = await request
      .post('/auth/login')
      .send(userLogin);

    expect(res.status).toBe(200);
  });

  it('should create a new expense for user1', async () => {
    const newExpense = {
      date: '2023-07-05',
      amount: 75,
      category: 'Food',
      description: 'Dinner'
    };

    const res = await request
      .post('/api/expenses')
      .set('Authorization', `Bearer ${user1Token}`)
      .send(newExpense);

    expect(res.status).toBe(201);
    expect(res.body).toHaveProperty('id');
    expect(res.body.category).toBe(newExpense.category);
    expect(res.body.amount).toBe(newExpense.amount);
  });

  it('should get all expenses for user1', async () => {
    const res = await request
      .get('/api/expenses')
      .set('Authorization', `Bearer ${user1Token}`);

    expect(res.status).toBe(200);
    expect(res.body).toHaveLength(3);
  });

  it('should filter expenses by category for user1', async () => {
    const res = await request
      .get('/api/expenses?category=Food')
      .set('Authorization', `Bearer ${user1Token}`);

    expect(res.status).toBe(200);
    expect(res.body).toHaveLength(2);
    expect(res.body[0].category).toBe('Food');
  });

  it('should filter expenses by date range for user1', async () => {
    const res = await request
      .get('/api/expenses?startDate=2023-07-01&endDate=2023-07-02')
      .set('Authorization', `Bearer ${user1Token}`);

    expect(res.status).toBe(200);
    expect(res.body).toHaveLength(2);
  });

  it('should filter expenses by category and date range for user1', async () => {
    const res = await request
      .get('/api/expenses?category=Transport&startDate=2023-07-01&endDate=2023-07-02')
      .set('Authorization', `Bearer ${user1Token}`);

    expect(res.status).toBe(200);
    expect(res.body).toHaveLength(1);
    expect(res.body[0].category).toBe('Transport');
  });
});
