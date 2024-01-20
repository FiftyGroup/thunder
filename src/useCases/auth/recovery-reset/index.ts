import { amqp } from "../../../amqp";
import { Hasher, Producer } from "../../../infra";
import { makeRecoveryRepository, makeUserRepository, transaction } from "../../../infra/database/repositories";
import RecoveryReset from "./RecoveryReset";
import RecoveryResetController from "./RecoveryResetController";
import RecoveryResetDTO from "./RecoveryResetDTO";

const makeRecoveryResetController = () => {
  const hasher = new Hasher();

  const recoveryreset = new RecoveryReset(
    makeUserRepository(),
    makeRecoveryRepository(),
    hasher,
    transaction,
  );

  const RecoveryResetControllerClass = new RecoveryResetController(recoveryreset);
  return RecoveryResetControllerClass.handle.bind(RecoveryResetControllerClass);
};

export { makeRecoveryResetController, RecoveryResetDTO };

