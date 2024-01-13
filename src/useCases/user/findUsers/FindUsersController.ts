import { Request, Response } from "express";
import { User } from "../../../domain/entities/User";
import { IFindUsers } from "../../../domain/useCases/IFindUsers";

export class FindUsersController {
  constructor(private readonly findUsers: IFindUsers) {}
  async handle(req: Request, res: Response) {
    const { name } = req.body;
    const { page } = req.params;
    const users = await this.findUsers.find(
      { name },
      page as unknown as number
    );
    res.json(users);
  }
}
