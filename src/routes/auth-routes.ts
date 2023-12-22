import express from "express";
import { ValidationMiddleware, authMiddleware } from "../middlewares";
import { LoginController } from "../controllers/auth/login-user-controller";
import { LoginDTO } from "../controllers/auth/DTOs/login-dto";
import { RegisterController } from "../controllers/auth/register-user-controller";
import { RegisterDTO } from "../controllers/auth/DTOs/register-dto";
import { logoutController } from "../controllers/auth/logout-controller";
import { LogoutDTO } from "../controllers/auth/DTOs/logout-dto";
import { RecoveryController } from "../controllers/auth/recovery-user-controller";
import { RecoveryDTO } from "../controllers/auth/DTOs/recovery-dto";

export default (router: express.Router) => {
  router.post("/auth/login", ValidationMiddleware(LoginDTO), LoginController);
  router.post("/auth/register", ValidationMiddleware(RegisterDTO), RegisterController);
  router.post("/auth/recovery", ValidationMiddleware(RecoveryDTO), RecoveryController);
  router.delete("/auth/logout", authMiddleware, ValidationMiddleware(LogoutDTO), logoutController);
};
