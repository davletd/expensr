// src/controllers/authController.ts
import { Request, Response } from 'express';
import { AppDataSource } from '../ormconfig';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import { User } from '../entities/User';

export class AuthController {
  static register = async (req: Request, res: Response) => {
    const { email, username, password } = req.body;
    const userRepository = AppDataSource.getRepository(User);

    const user = new User();
    user.email = email;
		user.username = username;
    user.password = await bcrypt.hash(password, 10);

    try {
      await userRepository.save(user);
    } catch (e) {
			console.log(e);
      return res.status(409).send('Email already in use');
    }

    return res.status(201).send('User created');
  };

  static login = async (req: Request, res: Response) => {
    const { username, password } = req.body;
    const userRepository = AppDataSource.getRepository(User);

    const user = await userRepository.findOne({ where: { username } });
    if (!user) {
      return res.status(401).send('Invalid credentials');
    }

    const validPassword = await bcrypt.compare(password, user.password);
    if (!validPassword) {
      return res.status(401).send('Invalid credentials');
    }

    const token = jwt.sign({ userId: user.id }, 'your_jwt_secret', {
      expiresIn: '1h',
    });

    return res.status(200).json({ token });
  };
}
