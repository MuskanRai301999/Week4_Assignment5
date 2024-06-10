"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const timesheetController_1 = require("../controllers/timesheetController");
const authMiddleware_1 = require("../middlewares/authMiddleware");
const router = (0, express_1.Router)();
//router.post('/', authenticate, createTimesheetController);
router.get('/report', authMiddleware_1.authenticate, timesheetController_1.getTimesheetReportController);
exports.default = router;
//# sourceMappingURL=timesheetRoutes.js.map