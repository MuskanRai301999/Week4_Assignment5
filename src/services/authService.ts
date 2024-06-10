import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import Employee from '../models/employee';

const secret = process.env.JWT_SECRET || 'your_jwt_secret';

export const register = async (employeeData: any) => {
  const hashedPassword = await bcrypt.hash(employeeData.password, 10);
  const employee = await Employee.create({ ...employeeData, password: hashedPassword });
  return employee;
};

export const login = async (loginData: any) => {
  const { email, password } = loginData;
  const employee = await Employee.findOne({ where: { email } });
  if (!employee) throw new Error('Invalid email or password');
  const validPassword = await bcrypt.compare(password, employee.password);
  if (!validPassword) throw new Error('Invalid email or password');

  const token = jwt.sign({ id: employee.id, role: employee.role }, secret, { expiresIn: '1h' });
  return token;
};
