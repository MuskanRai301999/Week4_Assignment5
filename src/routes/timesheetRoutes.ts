import { Router } from 'express';
import {  getTimesheetReportController } from '../controllers/timesheetController';
import { authenticate } from '../middlewares/authMiddleware';

const router = Router();

//router.post('/', authenticate, createTimesheetController);
router.get('/report', authenticate, getTimesheetReportController);

export default router;
