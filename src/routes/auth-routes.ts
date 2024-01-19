import express from "express";
import { validationMiddleware, makeAuthMiddleware } from "../middlewares";
import { LoginDTO, makeLoginController } from "../useCases/auth/login";
import { SignupDTO, makeSignUpController } from "../useCases/auth/signup";
import { LogoutDTO, makeLogoutController } from "../useCases/auth/logout";
import { RecoveryPasswordDTO, makeRecoveryPasswordController } from "../useCases/auth/recovery";
import { makeRecoveryValidationController } from "../useCases/auth/recovery-validation";
import { makeRecoveryResetController } from "../useCases/auth/recovery-reset";

export default (router: express.Router) => {
  router.post(
    "/auth/login",
    validationMiddleware.handle(LoginDTO),
    makeLoginController()
  );
  router.post(
    "/auth/register",
    validationMiddleware.handle(SignupDTO),
    makeSignUpController()
  );
  router.delete(
    "/auth/logout",
    makeAuthMiddleware(),
    validationMiddleware.handle(LogoutDTO),
    makeLogoutController()
  );
  router.post(
    "/auth/recovery",
    validationMiddleware.handle(RecoveryPasswordDTO),
    makeRecoveryPasswordController()
  );
  router.get(
    "/auth/recovery/:secretCode",
    makeRecoveryValidationController()
  );
  router.post(
    "/auth/recovery/:secretCode",
    makeRecoveryResetController()
  );
};
