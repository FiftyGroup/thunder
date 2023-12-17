import express from "express";
import { ValidationMiddleware } from "../middlewares";
import { CreateUserDTO } from "../controllers/user/DTOs/create-user-dto";
import { createUserController } from "../controllers/user/create-user-controller";

export default (router: express.Router) => {
  router.post("/", ValidationMiddleware(CreateUserDTO), createUserController);
};