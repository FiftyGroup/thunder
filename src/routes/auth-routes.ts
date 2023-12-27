import express from "express";
import { ValidationMiddleware, authMiddleware } from "../middlewares";
import { LoginController } from "../controllers/auth/login-user-controller";
import { LoginDTO } from "../controllers/auth/DTOs/login-dto";
import { RegisterController } from "../controllers/auth/register-user-controller";
import { RegisterDTO } from "../controllers/auth/DTOs/register-dto";
import { RecoveryController } from "../controllers/auth/recovery-user-controller";
import { RecoveryDTO } from "../controllers/auth/DTOs/recovery-dto";
import { resetPassword } from "../controllers/auth/resetPassword-controller"
import { passwordResetCodeValidationController } from "../controllers/auth/passwordResetCodeValidation-controller";
import { LogoutDTO } from "../useCases/auth/logout/LogoutDTO";
import { logoutController } from "../useCases/auth/logout/LogoutController";

export default (router: express.Router) => {
  router.post("/auth/login", ValidationMiddleware(LoginDTO), LoginController);
  router.post("/auth/register", ValidationMiddleware(RegisterDTO), RegisterController);
  router.delete("/auth/logout", authMiddleware, ValidationMiddleware(LogoutDTO), logoutController.handle);

  router.post("/auth/recovery", ValidationMiddleware(RecoveryDTO), RecoveryController);
  router.post("/auth/reset-password/:secret", resetPassword);
  router.get("/auth/reset-password/:secret", passwordResetCodeValidationController);
};
