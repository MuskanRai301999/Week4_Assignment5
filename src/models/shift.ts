import { Model, DataTypes, UUIDV4 } from 'sequelize';
import sequelize from '../services/dbService';
import Employee from './employee';

class Shift extends Model {
  public id!: string;
  public employeeId!: string;
  public startTime!: Date;
  public endTime?: Date;
  public actualHours!: number;
}

Shift.init({
  id: {
    type: DataTypes.UUID,
    defaultValue: UUIDV4,
    primaryKey: true,
  },
  employeeId: {
    type: DataTypes.UUID,
    allowNull: false,
    references: {
      model: Employee,
      key: 'id',
    },
  },
  startTime: {
    type: DataTypes.DATE,
    allowNull: false,
  },
  endTime: {
    type: DataTypes.DATE,
  },
  actualHours: {
    type: DataTypes.FLOAT,
    allowNull: false,
    defaultValue: 0,
  },
}, {
  sequelize,
  modelName: 'Shift',
});

Shift.belongsTo(Employee, { foreignKey: 'employeeId' });

export default Shift;
