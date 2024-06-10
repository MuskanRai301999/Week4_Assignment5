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
exports.login = exports.register = void 0;
const bcrypt_1 = __importDefault(require("bcrypt"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const employee_1 = __importDefault(require("../models/employee"));
const secret = process.env.JWT_SECRET || 'your_jwt_secret';
const register = (employeeData) => __awaiter(void 0, void 0, void 0, function* () {
    const hashedPassword = yield bcrypt_1.default.hash(employeeData.password, 10);
    const employee = yield employee_1.default.create(Object.assign(Object.assign({}, employeeData), { password: hashedPassword }));
    return employee;
});
exports.register = register;
const login = (loginData) => __awaiter(void 0, void 0, void 0, function* () {
    const { email, password } = loginData;
    const employee = yield employee_1.default.findOne({ where: { email } });
    if (!employee)
        throw new Error('Invalid email or password');
    const validPassword = yield bcrypt_1.default.compare(password, employee.password);
    if (!validPassword)
        throw new Error('Invalid email or password');
    const token = jsonwebtoken_1.default.sign({ id: employee.id, role: employee.role }, secret, { expiresIn: '1h' });
    return token;
});
exports.login = login;
//# sourceMappingURL=authService.js.map