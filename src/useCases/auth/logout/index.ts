import { makeSessionRepository } from "../../../infra/database/repositories";
import { Logout } from "./Logout";
import LogoutController from "./LogoutController";
import LogoutDTO from "./LogoutDTO";

const makeLogoutController = () => {
  const logout = new Logout(makeSessionRepository());
  const logoutControllerClass = new LogoutController(logout);
  return logoutControllerClass.handle.bind(logoutControllerClass);
};
export { makeLogoutController, LogoutDTO };
