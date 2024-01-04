import { IFindByUsername } from "../../../domain/useCases/IFindByUsername";
import { BadRequestError, NotFoundError } from "../../../errors";
import { IUserRepository } from "../../../infra/database/interfaces/IUserRepository";

export default class FindByUsername implements IFindByUsername {
  constructor(
    private readonly userRepository: IUserRepository,
  ) { }
  async execute(data: { username: string; }): Promise<{
    id: string,
    fullName: string,
    username: string,
    roles: string[],
    createdAt: string,
  }> {
    if (data.username.length > 15) {
      throw new BadRequestError([
        { message: "Username too long", field: "username" },
      ]);
    }

    const user = await this.userRepository.findOne({
      username: data.username,
      select: {
        id: true,
        fullName: true,
        username: true,
        roles: true,
        createdAt: true,
      },
    });

    if (!user) {
      throw new NotFoundError("User not found");
    }

    return {
      id: user.id,
      username: user.username,
      fullName: user.fullName,
      createdAt: user.createdAt,
      roles: user.roles,
    };
  }
}
