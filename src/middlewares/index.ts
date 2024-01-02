import { Encrypter } from "../infra";
import ValidationMiddleware from "./Validation";
import Auth from "./Auth";

const makeAuthMiddleware = () => {
  const encrypter = new Encrypter(process.env.JWT_SECRET);
  const authMiddleware = new Auth(encrypter);
  return authMiddleware.handle.bind(authMiddleware);
};
const validationMiddleware = new ValidationMiddleware();
export { validationMiddleware, makeAuthMiddleware };
