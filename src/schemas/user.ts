import mongoose from 'mongoose';
import { IUser } from '../common/types';

export type UserDocument = mongoose.Document & IUser;

export const userShema = new mongoose.Schema<UserDocument>(
  {
    name: {
      type: String,
    },
  },
  { timestamps: true }
);
