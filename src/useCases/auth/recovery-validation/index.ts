import { makeRecoveryRepository } from "../../../infra/database/repositories";
import RecoveryValidation from "./RecoveryValidation";
import RecoveryValidationController from "./RecoveryValidationController";

const makeRecoveryValidationController = () => {
  const recoveryValidation = new RecoveryValidation(makeRecoveryRepository());
  const recoveryValidationControllerClass = new RecoveryValidationController(recoveryValidation);
  return recoveryValidationControllerClass.handle.bind(recoveryValidationControllerClass);
};

export { makeRecoveryValidationController };

