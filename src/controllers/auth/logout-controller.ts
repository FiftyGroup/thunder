import { Request, Response } from "express";
import { logoutService } from "../../services/logout-service";

export const logoutController = async (req: Request, res: Response) => {
  const { id, username } = req.user;
  const { refreshToken } = req.body;
  await logoutService(refreshToken, id, username);
  res.send();
};
