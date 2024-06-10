import Shift from '../models/shift';

export const startShift = async (employeeId: string) => {
  const shift = await Shift.create({ employeeId, startTime: new Date() });
  return shift;
};

export const endShift = async (employeeId: string) => {
  const shift = await Shift.findOne({ where: { employeeId, endTime: null } });
  if (!shift) throw new Error('No active shift found');
  shift.endTime = new Date();
  shift.actualHours = (shift.endTime.getTime() - shift.startTime.getTime()) / (1000 * 60 * 60);
  await shift.save();
  return shift;
};
