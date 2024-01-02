import { ParameterConverter } from "../ParameterConverter";
import { Transaction } from "../Transaction";
import { EmailVerificationRepository } from "./EmailVerificationRepository";
import { RecoveryRepository } from "./RecoveryRepository";
import { SessionRepository } from "./SessionRepository";
import { UserRepository } from "./UserRepository";

const parameterConverter = new ParameterConverter();
export const transaction = new Transaction();
const makeEmailVerificationRepository = () =>
  new EmailVerificationRepository(parameterConverter, transaction);

const makeUserRepository = () =>
  new UserRepository(parameterConverter, transaction);

const makeSessionRepository = () =>
  new SessionRepository(parameterConverter, transaction);

const makeRecoveryRepository = () =>
  new RecoveryRepository(parameterConverter, transaction);

export {
  makeEmailVerificationRepository,
  makeUserRepository,
  makeSessionRepository,
  makeRecoveryRepository,
};
