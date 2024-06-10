import { Model, DataTypes, UUIDV4 } from 'sequelize';
import sequelize from '../services/dbService';
import Employee from './employee';

class Claims extends Model {
  public id!: string;
  public key!: string;
  public value!: string;
  public employeeId!: string;
}

Claims.init({
  id: {
    type: DataTypes.UUID,
    defaultValue: UUIDV4,
    primaryKey: true,
  },
  key: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  value: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  employeeId: {
    type: DataTypes.UUID,
    allowNull: false,
    references: {
      model: Employee,
      key: 'id',
    },
  },
}, {
  sequelize,
  modelName: 'Claims',
});

Claims.belongsTo(Employee, { foreignKey: 'employeeId' });

export default Claims;
