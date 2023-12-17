import express from "express";
import { RegisterController } from "../controllers/auth/register-user-controller";
import { authMiddleware } from "../middlewares/index";

export default (router: express.Router) => {
  router.get("/auth/register", authMiddleware, RegisterController);
};
