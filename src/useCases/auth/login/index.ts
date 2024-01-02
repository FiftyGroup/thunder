import { config } from "dotenv";
import { Encrypter, Hasher } from "../../../infra";
import {
  makeSessionRepository,
  makeUserRepository,
} from "../../../infra/database/repositories";
import Login from "./Login";
import LoginController from "./LoginController";
import { LoginDTO } from "./LoginDTO";
config();
const makeLoginController = () => {
  const login = new Login(
    makeUserRepository(),
    makeSessionRepository(),
    new Hasher(),
    new Encrypter(process.env.JWT_SECRET)
  );

  const loginControllerClass = new LoginController(login);
  return loginControllerClass.handle.bind(loginControllerClass);
};
export { makeLoginController, LoginDTO };
