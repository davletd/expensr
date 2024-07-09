import { DataSource } from 'typeorm';
import { User } from './entities/User';
import { Expense } from './entities/Expense';

export const AppDataSource = new DataSource({
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'expensrDBUser',
  password: 'phYQ!CLK6AdyPoJ_D-TeRa!y',
  database: 'expensrDB',
  synchronize: true,
  logging: false,
  entities: [User, Expense],
  migrations: [],
  subscribers: [],
});