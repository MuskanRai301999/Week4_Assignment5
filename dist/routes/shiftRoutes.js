"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const shiftController_1 = require("../controllers/shiftController");
const authMiddleware_1 = require("../middlewares/authMiddleware");
const router = (0, express_1.Router)();
router.post('/start', authMiddleware_1.authenticate, shiftController_1.startShiftController);
router.post('/end', authMiddleware_1.authenticate, shiftController_1.endShiftController);
exports.default = router;
//# sourceMappingURL=shiftRoutes.js.map