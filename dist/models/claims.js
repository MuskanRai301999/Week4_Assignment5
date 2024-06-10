"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const dbService_1 = __importDefault(require("../services/dbService"));
const employee_1 = __importDefault(require("./employee"));
class Claims extends sequelize_1.Model {
}
Claims.init({
    id: {
        type: sequelize_1.DataTypes.UUID,
        defaultValue: sequelize_1.UUIDV4,
        primaryKey: true,
    },
    key: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    value: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    employeeId: {
        type: sequelize_1.DataTypes.UUID,
        allowNull: false,
        references: {
            model: employee_1.default,
            key: 'id',
        },
    },
}, {
    sequelize: dbService_1.default,
    modelName: 'Claims',
});
Claims.belongsTo(employee_1.default, { foreignKey: 'employeeId' });
exports.default = Claims;
//# sourceMappingURL=claims.js.map