import express from "express";
import authRoutes from "./auth-routes";
import userRoutes from "./user-routes";
const router = express.Router();

export default (): express.Router => {
  authRoutes(router);
  userRoutes(router);
  return router;
};
