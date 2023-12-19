import bcrypt from "bcrypt";
import { Request, Response } from "express";
import { loginService } from "../../services/login-service";
import BadRequestError from "../../errors/bad-request-error";
import Unauthorized from "../../errors/unauthorized-error";
import ForbiddenError from "../../errors/forbiden-error";

export const LoginController = async (req: Request, res: Response) => {
  const { username, password } = req.body;

  const accountValidation = await loginService(username, password);

  if (!username && !password) {
    throw new BadRequestError([
      { message: "username must have at last 3 characters", field: "username" },
      { message: "password must have at last 8 characters", field: "password" },
    ]);
  }

  if (!username || !username.length) {
    throw new BadRequestError([
      { message: "username must have at last 3 characters", field: "username" },
    ]);
  }

  if (!password || !password.length) {
    throw new BadRequestError([
      { message: "password must have at last 3 characters", field: "password" },
    ]);
  }

  if (!accountValidation) {
    throw new Unauthorized("Invalid username or password");
  }

  const equalPassword = bcrypt.compare(password, accountValidation.password);

  if (!equalPassword) {
    throw new Unauthorized("Invalid username or password");
  }

  if (!accountValidation.isVerified) {
    throw new ForbiddenError("Account not verified");
  }

  res.send({
    username: accountValidation.username,
  });
};
