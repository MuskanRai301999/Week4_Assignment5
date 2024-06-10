import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';
import Employee from '../models/employee';
import { config } from '../config/config';

export interface AuthRequest extends Request {
  user?: any;
}

export const authenticate = async (req: AuthRequest, res: Response, next: NextFunction) => {
  const token = req.header('Authorization')?.replace('Bearer ', '');

  if (!token) {
    return res.status(401).send({ error: 'Access denied. No token provided.' });
  }

  // try {
  //   const decoded = jwt.verify(token);
  //   req.user = await Employee.findByPk((decoded as any).id);
  //   next();
  // } catch (ex) {
  //   res.status(400).send({ error: 'Invalid token.' });
  // }
};
