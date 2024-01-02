import { ParameterConverter } from "../ParameterConverter";
import { EmailVerificationRepository } from "./EmailVerificationRepository";
import { RecoveryRepository } from "./RecoveryRepository";
import { SessionRepository } from "./SessionRepository";
import { UserRepository } from "./UserRepository";

const parameterConverter = new ParameterConverter();

const makeEmailVerificationRepository = () =>
  new EmailVerificationRepository(parameterConverter);

const makeUserRepository = () => new UserRepository(parameterConverter);

const makeSessionRepository = () => new SessionRepository(parameterConverter);

const makeRecoveryRepository = () => new RecoveryRepository(parameterConverter);

export {
  makeEmailVerificationRepository,
  makeUserRepository,
  makeSessionRepository,
  makeRecoveryRepository,
};
