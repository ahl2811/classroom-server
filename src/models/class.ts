import { model } from 'mongoose';
import { RoomDocument, classSchema } from '../schemas/room';
import data from '../test/data';

export const ClassModel = model<RoomDocument>('Class', classSchema);

const seedClass = async () => {
  await ClassModel.deleteMany();
  return await ClassModel.insertMany(data.classes);
};

const getAllClasses = async () => {
  return await ClassModel.find();
};

export const ClassModels = {
  seedClass,
  getAllClasses,
};
