import dotenv from 'dotenv';
dotenv.config();

export const MONGODB_URI =
  process.env.MONGODB_URI ||
  'mongodb+srv://admin:123@cluster0.xzihi.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';

export const PORT = process.env.PORT || 4000;
