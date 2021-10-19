import * as dotenv from 'dotenv';
import express from 'express';
import cors from 'cors';
import data from './test/data';
import mongoose from 'mongoose';
import { MONGODB_URI, PORT } from './common/config';
import { ClassModels } from './models/class';

dotenv.config();

const app = express();

//Connect to mongoDB
mongoose
  .connect(`${MONGODB_URI}`)
  .then(() => {
    console.log(`Connect to DB successfully !!`);
  })
  .catch((err) => {
    console.log(
      `MongoDB connection error. Please make sure MongoDB is running. ${err}`
    );
  });

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
  res.json({ message: 'Hello World' });
});

app.get('/seed', async (req, res) => {
  await ClassModels.seedClass();
  res.send('Seeded successfully');
});

app.get('/classes', async (req, res) => {
  const classes = await ClassModels.getAllClasses();
  res.json(classes);
});

app.listen(PORT, () => {
  console.log(`Server listening at PORT ${PORT}`);
});
