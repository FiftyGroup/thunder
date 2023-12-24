import "express-async-errors";
import express, { json } from "express";
import router from "./routes/index";
import { errorHandler } from "./errors/error-handler";
import { Producer } from "./utils/Producer";
import { amqp } from "./amqp";

export const app = express();
export const MailProducer = new Producer("ACCOUNT_CREATED", amqp)

app.use(json());
app.use("/", router());
app.use(errorHandler);
