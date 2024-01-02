import { IFindMany, IFindOne } from "../interfaces/IUserRepository";
import { UserModel } from "../models/UserModel";
import { User } from "../../../domain/entities/User";
import { ParameterConverter } from "../ParameterConverter";
import { IUserRepository } from "../interfaces/IUserRepository";

export class UserRepository implements IUserRepository {
  repository = UserModel;
  constructor(private readonly parameterConverter: ParameterConverter) {}
  async findMany(params: IFindMany): Promise<User[]> {
    return (await this.repository.findAll({
      ...this.parameterConverter.convert(params),
    })) as unknown as User[];
  }
  async save(session: User, tid?: string): Promise<void> {
    await this.repository.create({
      ...session,
    });
  }
  async findOne(params: IFindOne, tid?: string): Promise<User> {
    return (await this.repository.findOne({
      ...this.parameterConverter.convert(params),
    })) as unknown as User | null;
  }
  async deleteOne(params: IFindOne, tid?: string): Promise<void> {
    await this.repository.destroy({
      ...(this.parameterConverter.convert(params) as unknown as any),
    });
  }
  async deleteMany(params: IFindOne, tid?: string): Promise<void> {
    await this.repository.destroy({
      ...(this.parameterConverter.convert(params) as unknown as any),
    });
  }
}
