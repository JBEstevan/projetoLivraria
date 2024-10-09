import express from 'express';
import userRouter from './routers/userRouter.js';
import dbConfig from './config/dbConfig.js';

dbConfig();

const app = express();
app.use(express.json());

app.use('/users', userRouter);

app.listen(3000, () => console.log('Server is running on port 3000'));