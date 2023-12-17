import express from "express";
import { RegisterController } from "../controllers/auth/register-user-controller";
import { authMiddleware, ValidationMiddleware } from "../middlewares/index";
import { logoutController } from "../controllers/auth/logout-controller";
import { LogoutDTO } from "../controllers/auth/DTOs/logout-dto";

export default (router: express.Router) => {
  router.get("/auth/register", authMiddleware, RegisterController);
  router.delete(
    "/auth/logout",
    authMiddleware,
    ValidationMiddleware(LogoutDTO),
    logoutController
  );
};
