import mongoose, { Types } from 'mongoose';

export type RoomDocument = mongoose.Document & {
  users: Types.ObjectId[];
  name: string;
};

export const classSchema = new mongoose.Schema<RoomDocument>(
  {
    users: {
      type: [],
    },
    name: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);
