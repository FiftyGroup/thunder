import { IFindOne } from "../interfaces/ISessionRepository";
import { SessionModel } from "../models/SessionModel";
import { Session } from "../../../domain/entities/Session";
import { ParameterConverter } from "../ParameterConverter";
import { ISessionRepository } from "../interfaces/ISessionRepository";
import { Transaction } from "../Transaction";

export class SessionRepository implements ISessionRepository {
  repository = SessionModel;
  constructor(
    private readonly parameterConverter: ParameterConverter,
    private readonly transaction: Transaction
  ) {}
  async updateOne(
    params: IFindOne,
    data: Partial<Session>,
    tid?: string
  ): Promise<void> {
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
  async save(session: Session, tid?: string): Promise<void> {
    const transaction = this.transaction.getOne(tid);
    await this.repository.create(
      {
        ...session,
      },
      { transaction }
    );
  }
  async findOne(params: IFindOne, tid?: string): Promise<Session> {
    return (await this.repository.findOne({
      ...this.parameterConverter.convert(params),
    })) as unknown as Session | null;
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
