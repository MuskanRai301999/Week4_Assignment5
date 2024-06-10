import Timesheet from '../models/timesheet';



export const getTimesheetReport = async () => {
  try {
    // Retrieve timesheet data from the database
    const timesheets = await Timesheet.findAll();

    // Process timesheet data to generate the report
    const reportData = timesheets.map((timesheet) => ({
      id: timesheet.id,
      employeeId: timesheet.employeeId,
      projectName: timesheet.projectName,
      taskName: timesheet.taskName,
      fromDate: timesheet.fromDate,
      toDate: timesheet.toDate,
    }));

    // Return the report data
    return reportData;
  } catch (error) {
    throw new Error('Failed to generate timesheet report');
  }
};
