import { Request, Response } from 'express';
import { startShift, endShift } from '../services/shiftService';
import { AuthRequest } from '../middlewares/authMiddleware';

export const startShiftController = async (req: AuthRequest, res: Response) => {
  try {
    const shift = await startShift(req.user.id);
    res.status(201).send(shift);
  } catch (error) {
    res.status(500).send({ error: error instanceof Error ? error.message : 'An unexpected error occurred' });
  }
};

export const endShiftController = async (req: AuthRequest, res: Response) => {
  try {
    const shift = await endShift(req.user.id);
    res.status(200).send(shift);
  } catch (error) {
    res.status(500).send({ error: error instanceof Error ? error.message : 'An unexpected error occurred' });
  }
};
