import express from 'express';
import { RegisterController } from '../controllers/auth/register-user-controller';
import { LoginController } from '../controllers/auth/login-user-controller';
import { ValidationMiddleware } from '../middlewares';

export default (router: express.Router) => {
  router.post('/auth/register', ValidationMiddleware, RegisterController);
  router.post('/auth/login', ValidationMiddleware, LoginController);
  router.delete(
      "/auth/logout",
      authMiddleware,
      ValidationMiddleware(LogoutDTO),
      logoutController
    );
};
