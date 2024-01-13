import { makeUserRepository } from "../../../infra/database/repositories";
import { FindUsers } from "./FindUsers";
import { FindUsersController } from "./FindUsersController";
import { FindUsersDTO } from "./FindUsersDTO";

const makeFindUsersController = () => {
  const findUsers = new FindUsers(makeUserRepository());
  const findUsersControllerClas = new FindUsersController(findUsers);
  return findUsersControllerClas.handle.bind(findUsersControllerClas);
};
export { FindUsersDTO, makeFindUsersController };
