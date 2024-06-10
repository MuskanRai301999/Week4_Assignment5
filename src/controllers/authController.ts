import { Request, Response, NextFunction } from 'express';
import { register, login } from '../services/authService';

export const registerController = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const employee = await register(req.body);
    res.status(201).json(employee);
  } catch (error) {
    next(error);
  }
};

export const loginController = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const token = await login(req.body);
    res.json({ token });
  } catch (error) {
    next(error);
  }
};
