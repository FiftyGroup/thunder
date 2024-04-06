import { IFindOne } from "../interfaces/IRecoveryRepository";
import { RecoveryModel } from "../models/RecoveryModel";
import { Recovery } from "../../../domain/entities/Recovery";
import { ParameterConverter } from "../ParameterConverter";
import { IRecoveryRespository } from "../interfaces/IRecoveryRepository";
import { Transaction } from "../Transaction";

export class RecoveryRepository implements IRecoveryRespository {
  repository = RecoveryModel;
  constructor(
    private readonly parameterConverter: ParameterConverter,
    private readonly transaction: Transaction
  ) {}
  async updateOne(
    params: IFindOne,
    data: Partial<Recovery>,
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
  async save(recovery: Recovery, tid?: string): Promise<void> {
    const transaction = this.transaction.getOne(tid);

    await this.repository.create(
      {
        ...recovery,
      },
      { transaction }
    );
  }
  async findOne(params: IFindOne, tid?: string): Promise<Recovery> {
    return (await this.repository.findOne({
      ...this.parameterConverter.convert(params),
    })) as unknown as Recovery | null;
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
