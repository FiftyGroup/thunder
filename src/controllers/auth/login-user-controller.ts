import { Request, Response } from "express";
import { loginService, generateTokenService, refreshTokenService, setTokenExpirationService } from "../../services/login-service";

export const LoginController = async (req: Request, res: Response) => {
  const { username, password } = req.body;

  const accountValidation = await loginService(username, password);

  const token = await generateTokenService(accountValidation.id);
  const refreshToken = await refreshTokenService(token);
  const expiringToken = await setTokenExpirationService(token);

  res.send({
    access_token: token,
    refresh_token: refreshToken,
    token_expiration: expiringToken.expirationDate,
    username: accountValidation.username,
  });
};
