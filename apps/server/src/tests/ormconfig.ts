import { DataSource } from 'typeorm';
import { User } from '../entities/User';
import { Expense } from '../entities/Expense';

export const AppDataSource = new DataSource({
  type: 'postgres',
  host: 'localhost',
  port: 5433,
  username: 'expensrTestDBUser',
  password: 'phYQ!CLK6AdyPoJ_D-TeRa!y',
  database: 'expensrTestDB',
  synchronize: true,
  logging: false,
  entities: [User, Expense],
  migrations: [],
  subscribers: [],
});