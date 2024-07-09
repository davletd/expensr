import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from "typeorm";
import { Expense } from "./Expense";

@Entity()
export class User {
  @PrimaryGeneratedColumn("uuid")
  id!: string;

  @Column({ unique: true })
  username!: string;
  
  @Column()
  email!: string;

  @Column()
  password!: string;

  @OneToMany(() => Expense, expense => expense.user)
  expenses!: Expense[];
}