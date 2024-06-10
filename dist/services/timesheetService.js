"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getTimesheetReport = void 0;
const timesheet_1 = __importDefault(require("../models/timesheet"));
const getTimesheetReport = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        // Retrieve timesheet data from the database
        const timesheets = yield timesheet_1.default.findAll();
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
    }
    catch (error) {
        throw new Error('Failed to generate timesheet report');
    }
});
exports.getTimesheetReport = getTimesheetReport;
//# sourceMappingURL=timesheetService.js.map