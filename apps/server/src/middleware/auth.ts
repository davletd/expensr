// src/middleware/auth.ts
import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';

export const checkJwt = (req: Request, res: Response, next: NextFunction) => {
  const authHeader = req.headers['authorization'];
  if (!authHeader) {
    return res.status(401).send('Authorization header missing');
  }

  const token = authHeader.split(' ')[1];
  if (!token) {
    return res.status(401).send('Token missing');
  }
  let jwtPayload;

  try {
    jwtPayload = <any>jwt.verify(token, 'your_jwt_secret');
    res.locals.jwtPayload = jwtPayload;
  } catch (error) {
    return res.status(401).send('Unauthorized');
  }

  next();
};
