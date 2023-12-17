import express from 'express';
import { RegisterController } from '../controllers/auth/register-user-controller';
import { CreateUserDTO } from '../controllers/user/DTOs/create-user-dto';
import { ValidationMiddleware } from '../middlewares';

export default (router: express.Router) => {
  router.get('/auth/register', RegisterController);
};
