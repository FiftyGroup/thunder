import { User } from "../../../domain/entities/User";
import { IFindUsers } from "../../../domain/useCases/IFindUsers";
import { IUserRepository } from "../../../infra/database/interfaces/IUserRepository";

export class FindUsers implements IFindUsers {
  constructor(private readonly userRepository: IUserRepository) {}

  async find(data: { name: string }, page: number): Promise<User[]> {
    const limit = 20;
    const offset = limit * page - limit;
    return this.userRepository.findMany({
      fullName: { value: data.name, insensitive: true, similar: true },
      limit: 20,
      offset,
      select: {
        fullName: true,
        id: true,
        username: true,
      },
    });
  }
}
