import express from "express";
import { makeFindByUsernameController } from "../useCases/user/findByUsername";
import {
  makeFindUsersController,
  FindUsersDTO,
} from "../useCases/user/findUsers";
import { validationMiddleware } from "../middlewares";

export default (router: express.Router) => {
  router.get("/user/:username", makeFindByUsernameController());
  router.get(
    "/users/:page",
    validationMiddleware.handle(FindUsersDTO),
    makeFindUsersController()
  );
};
