// src/middleware/auth.ts
import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';

export const checkJwt = (req: Request, res: Response, next: NextFunction) => {
  const token = <string>req.headers['auth'];
  let jwtPayload;

  try {
    jwtPayload = <any>jwt.verify(token, 'your_jwt_secret');
    res.locals.jwtPayload = jwtPayload;
  } catch (error) {
    return res.status(401).send('Unauthorized');
  }

  next();
};
