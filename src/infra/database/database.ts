import { Sequelize } from "sequelize-typescript";
import { UserModel } from "./models/UserModel";
import { EmailVerificationModel } from "./models/EmailVerificationModel";
import { RecoveryModel } from "./models/RecoveryModel";
import { SessionModel } from "./models/SessionModel";
export const initDatabase = async () => { };
export const sequelize = new Sequelize({
  username: "wgtuogyq",
  password: "TGRx5Pit-pnA2dOA9SmDzYcdBIeabR1u",
  database: "wgtuogyq",
  host: "bubble.db.elephantsql.com",
  dialect: "postgres",
  logging: false,
});

sequelize.addModels([
  UserModel,
  EmailVerificationModel,
  RecoveryModel,
  SessionModel,
]);
