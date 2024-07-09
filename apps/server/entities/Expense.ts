// src/entities/Expense.ts
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { IsDate, IsNumber, IsString } from 'class-validator';
import { User } from './User';

@Entity()
export class Expense {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column()
  @IsDate()
  date: Date;

  @Column()
  @IsNumber()
  amount: number;

  @Column()
  @IsString()
  category: string;

  @Column()
  @IsString()
  description: string;

  @ManyToOne(() => User, (user) => user.expenses)
  user: User;
}
