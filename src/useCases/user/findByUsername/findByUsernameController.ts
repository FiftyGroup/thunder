import { Request, Response } from "express";
import { IFindByUsername } from "../../../domain/useCases/IFindByUsername";

export default class FindByUsernameController {
  constructor(private readonly findByUsername: IFindByUsername) { }

  async handle(req: Request, res: Response) {
    const { username } = req.params;
    const userData = await this.findByUsername.execute({ username });
    res.status(200).json(userData);
  }
}