import { Model, DataTypes, UUIDV4 } from 'sequelize';
import sequelize from '../services/dbService';

class Employee extends Model {
  public id!: string;
  public name!: string;
  public email!: string;
  public password!: string;
  public assignedShiftHours!: number;
  public role!: string;
}

Employee.init({
  id: {
    type: DataTypes.UUID,
    defaultValue: UUIDV4,
    primaryKey: true,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  assignedShiftHours: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  role: {
    type: DataTypes.ENUM('SuperAdmin', 'Manager', 'Employee'),
    allowNull: false,
  },
}, {
  sequelize,
  modelName: 'Employee',
});

export default Employee;
