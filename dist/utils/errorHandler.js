"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.handleError = void 0;
const handleError = (err, req, res, next) => {
    const statusCode = res.statusCode !== 200 ? res.statusCode : 500;
    res.status(statusCode).json({
        error: err.message || 'An unexpected error occurred',
    });
};
exports.handleError = handleError;
//# sourceMappingURL=errorHandler.js.map