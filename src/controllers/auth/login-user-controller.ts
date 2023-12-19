import { Request, Response } from "express";
import { loginService, generateTokenService } from "../../services/login-service";

export const LoginController = async (req: Request, res: Response) => {
  const { username, password } = req.body;

  const accountValidation = await loginService(username, password);

  const token = generateTokenService(username);

  res.send({
    access_token: token,
    username: accountValidation.username,
  });
};
