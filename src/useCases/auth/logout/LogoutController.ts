import { Request, Response } from "express";
import { ILogout } from "../../../domain/useCases/ILogout";

export default class LogoutController {
  constructor(private readonly logout: ILogout) {
    this.logout = logout;
  }
  async handle(req: Request, res: Response) {
    await this.logout.execute(req.body.refreshToken);
    res.status(200).json({ message: "successfully logged-out" })
  }
}
