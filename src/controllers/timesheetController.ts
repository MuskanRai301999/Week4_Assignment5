import { Request, Response } from 'express';
import { getTimesheetReport } from '../services/timesheetService';
import { AuthRequest } from '../middlewares/authMiddleware';



export const getTimesheetReportController = async (req: Request, res: Response) => {
  try {
    const report = await getTimesheetReport();
    res.setHeader('Content-Type', 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet');
    res.setHeader('Content-Disposition', 'attachment; filename=timesheet_report.xlsx');
    res.send(report);
  } catch (error) {
    res.status(500).send({ error: error instanceof Error ? error.message : 'An unexpected error occurred' });
  }
};
