import "express-async-errors";
import express, { json } from "express";
import { errorHandler } from "./errors/error-handler";
import { Producer } from "./infra/index";
import { amqp } from "./amqp";
import routes from "./routes/index";
import { sequelize } from "./infra/database/database";
export const app = express();
export const PasswordRecoveryPublisher = new Producer(
  "RECOVERY_PASSWORD",
  amqp
);

const startup = async () => {
  app.use(json());
  app.use(routes());
  app.use(errorHandler);
};

startup();
