import express from "express";
import { makeFindByUsernameController } from "../useCases/user/findByUsername";

export default (router: express.Router) => {
  router.get(
    "/user/:username", makeFindByUsernameController()
  );
};
