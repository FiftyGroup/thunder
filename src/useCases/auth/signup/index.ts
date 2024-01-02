import { amqp } from "../../../amqp";
import { Hasher, Producer, SecretGenerator } from "../../../infra";
import {
  makeEmailVerificationRepository,
  makeUserRepository,
  transaction,
} from "../../../infra/database/repositories";
import Signup from "./Signup";
import SignupController from "./SignupController";
import SignupDTO from "./SignupDTO";

const makeSignUpController = () => {
  const MailProducer = new Producer("ACCOUNT_CREATED", amqp);
  const secretGenerator = new SecretGenerator({
    length: 150,
    numbers: true,
    uppercase: true,
    symbols: false,
  });
  const hasher = new Hasher();
  const singup = new Signup(
    makeUserRepository(),
    makeEmailVerificationRepository(),
    MailProducer,
    secretGenerator,
    hasher,
    transaction
  );
  const signupControllerClass = new SignupController(singup);
  return signupControllerClass.handle.bind(signupControllerClass);
};

export { makeSignUpController, SignupDTO };
