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
Object.defineProperty(exports, "__esModule", { value: true });
exports.endShiftController = exports.startShiftController = void 0;
const shiftService_1 = require("../services/shiftService");
const startShiftController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const shift = yield (0, shiftService_1.startShift)(req.user.id);
        res.status(201).send(shift);
    }
    catch (error) {
        res.status(500).send({ error: error instanceof Error ? error.message : 'An unexpected error occurred' });
    }
});
exports.startShiftController = startShiftController;
const endShiftController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const shift = yield (0, shiftService_1.endShift)(req.user.id);
        res.status(200).send(shift);
    }
    catch (error) {
        res.status(500).send({ error: error instanceof Error ? error.message : 'An unexpected error occurred' });
    }
});
exports.endShiftController = endShiftController;
//# sourceMappingURL=shiftController.js.map