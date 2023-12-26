import express from "express";
import { ValidationMiddleware, authMiddleware } from "../middlewares";
import { LoginController } from "../controllers/auth/login-user-controller";
import { LoginDTO } from "../controllers/auth/DTOs/login-dto";
import registerController from "../controllers/auth/register-user-controller";
import { RegisterDTO } from "../controllers/auth/DTOs/register-dto";
import { logoutController } from "../controllers/auth/logout-controller";
import { LogoutDTO } from "../controllers/auth/DTOs/logout-dto";
import { RecoveryController } from "../controllers/auth/recovery-user-controller";
import { RecoveryDTO } from "../controllers/auth/DTOs/recovery-dto";
import ResetPassword from "../controllers/auth/resetPassword-controller"
import PasswordResetCodeValidationController from "../controllers/auth/passwordResetCodeValidation-controller";

export default (router: express.Router) => {
  router.post("/auth/login", ValidationMiddleware(LoginDTO), LoginController);
  router.post("/auth/register", ValidationMiddleware(RegisterDTO), registerController.handle);
  router.delete("/auth/logout", authMiddleware, ValidationMiddleware(LogoutDTO), logoutController);

  router.post("/auth/recovery", ValidationMiddleware(RecoveryDTO), RecoveryController);
  router.post("/auth/reset-password/:secret", ResetPassword.handle);
  router.get("/auth/reset-password/:secret", PasswordResetCodeValidationController.handle);
};
