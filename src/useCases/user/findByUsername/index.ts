import { makeUserRepository } from "../../../infra/database/repositories";
import FindByUsername from "./findByUsername";
import FindByUsernameController from "./findByUsernameController";

const makeFindByUsernameController = () => {
  const findByUsername = new FindByUsername(makeUserRepository());
  const findByUsernameControllerClass = new FindByUsernameController(findByUsername);
  return findByUsernameControllerClass.handle.bind(findByUsernameControllerClass);
};

export { makeFindByUsernameController };
