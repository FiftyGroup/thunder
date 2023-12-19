import express from 'express';
import { RegisterController } from '../controllers/auth/register-user-controller';
import { LoginController } from '../controllers/auth/login-user-controller';
import { ValidationMiddleware, authMiddleware } from '../middlewares';
import { logoutController } from '../controllers/auth/logout-controller';
import { LogoutDTO } from '../controllers/auth/DTOs/logout-dto';
import { RegisterDTO } from '../controllers/auth/DTOs/register-dto';

export default (router: express.Router) => {
  router.post('/auth/register', ValidationMiddleware(RegisterDTO), RegisterController);
  router.post('/auth/login', ValidationMiddleware, LoginController);
  router.delete('/auth/logout', authMiddleware, ValidationMiddleware(LogoutDTO), logoutController);
};
