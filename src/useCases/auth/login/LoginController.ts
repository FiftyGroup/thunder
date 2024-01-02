import { Request, Response } from "express";
import { ILogin } from "../../../domain/useCases/ILogin";
import { LoginDTO } from "./LoginDTO";

export default class LoginController {
  constructor(private readonly login: ILogin) {}

  async handle(req: Request, res: Response) {
    const { username, password } = req.body as unknown as LoginDTO;
    const userData = await this.login.auth({
      username,
      password,
    });
    res.send(userData);
  }
}
