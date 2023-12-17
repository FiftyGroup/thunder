import { Router } from 'express';
import { ValidationMiddleware } from '../middlewares';
import { CreateUserDTO } from '../controllers/user/DTOs/create-user-dto';
import { createUserController } from '../controllers/user/create-user-controller';

export const useRouter = Router();

useRouter.post('/', ValidationMiddleware(CreateUserDTO), createUserController);
