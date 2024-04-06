import { Request, Response, NextFunction } from "express";
import { Unauthorized } from "../errors";
import { IAuth } from "./interfaces/IAuth";
import { IEncrypter } from "../infra/interfaces/IEncrypter";

export default class Auth implements IAuth {
  constructor(private readonly encrypter: IEncrypter) {}

  async handle(req: Request, res: Response, next: NextFunction): Promise<void> {
    const authHeader = req.headers.authorization;
    const token = authHeader.split(" ")[1];
    const { success, data } = this.encrypter.decrypt(token);
    if (!success) {
      throw new Unauthorized("Valid jwt token required");
    }
    req.user = {
      id: data.id,
      username: data.username,
    };
  }
}
