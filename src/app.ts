import 'express-async-errors';
import express, { json } from 'express';
import router from './routes/index';
import { errorHandler } from './errors/error-handler';

export const app = express();

app.use(json());
app.use('/', router());
app.use(errorHandler);
