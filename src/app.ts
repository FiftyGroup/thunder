import 'express-async-errors';
import express, { json } from 'express';
import { useRouter } from './routes/user-routes';
import { errorHandler } from './errors/error-handler';
export const app = express();

app.use(json());

app.use('/api/user', useRouter);

// always on the end of file
app.use(errorHandler);
