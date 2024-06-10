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
const dbService_1 = __importDefault(require("./services/dbService"));
const app_1 = __importDefault(require("./app"));
const config_1 = require("./config/config");
const logger_1 = __importDefault(require("./utils/logger"));
const startServer = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield dbService_1.default.authenticate();
        logger_1.default.info('Database connected!');
        yield dbService_1.default.sync();
        logger_1.default.info('Models synchronized with the database!');
        app_1.default.listen(config_1.config.port, () => {
            logger_1.default.info(`Server running on port ${config_1.config.port}`);
        });
    }
    catch (error) {
        logger_1.default.error('Unable to connect to the database:', error);
    }
});
startServer();
//# sourceMappingURL=server.js.map