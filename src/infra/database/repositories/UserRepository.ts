import { IFindMany, IFindOne } from "../interfaces/IUserRepository";
import { UserModel } from "../models/UserModel";
import { User } from "../../../domain/entities/User";
import { ParameterConverter } from "../ParameterConverter";
import { IUserRepository } from "../interfaces/IUserRepository";
import { Transaction } from "../Transaction";

export class UserRepository implements IUserRepository {
  repository = UserModel;
  constructor(
    private readonly parameterConverter: ParameterConverter,
    private readonly transaction: Transaction
  ) {}
  async updateOne(params: IFindOne, data: Partial<User>, tid: string) {
    const transaction = this.transaction.getOne(tid);
    await this.repository.update(
      {
        ...data,
      },

      {
        ...this.parameterConverter.convert(params),
        transaction,
        limit: 1,
      }
    );
  }
  async findMany(params: IFindMany): Promise<User[]> {
    return (await this.repository.findAll({
      ...this.parameterConverter.convert(params),
    })) as unknown as User[];
  }
  async save(session: User, tid?: string): Promise<void> {
    const transaction = this.transaction.getOne(tid);
    await this.repository.create(
      {
        ...session,
      },
      { transaction }
    );
  }
  async findOne(params: IFindOne, tid?: string): Promise<User> {
    return (await this.repository.findOne({
      ...this.parameterConverter.convert(params),
    })) as unknown as User | null;
  }
  async deleteOne(params: IFindOne, tid?: string): Promise<void> {
    const transaction = this.transaction.getOne(tid);
    await this.repository.destroy({
      ...(this.parameterConverter.convert(params) as unknown as any),
      transaction,
    });
  }
  async deleteMany(params: IFindOne, tid?: string): Promise<void> {
    const transaction = this.transaction.getOne(tid);
    await this.repository.destroy({
      ...(this.parameterConverter.convert(params) as unknown as any),
      transaction,
    });
  }
}
