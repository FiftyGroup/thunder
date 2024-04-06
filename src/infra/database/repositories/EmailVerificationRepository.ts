import {
  IEmailVerificationRepository,
  IFindOne,
} from "../interfaces/IEmailVerificationRepository";
import { EmailVerificationModel } from "../models/EmailVerificationModel";
import { EmailVerification } from "../../../domain/entities/EmailVerification";
import { ParameterConverter } from "../ParameterConverter";
import { Transaction } from "../Transaction";

export class EmailVerificationRepository
  implements IEmailVerificationRepository
{
  repository = EmailVerificationModel;
  parameterConverter: ParameterConverter;
  constructor(
    parameterConverter: ParameterConverter,
    private readonly transaction: Transaction
  ) {
    this.parameterConverter = parameterConverter;
  }
  async updateOne(
    params: IFindOne,
    data: Partial<EmailVerification>,
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
  async save(
    emailVerification: EmailVerification,
    tid?: string
  ): Promise<void> {
    const transaction = this.transaction.getOne(tid);

    await this.repository.create({ ...emailVerification }, { transaction });
  }
  async findOne(params: IFindOne, tid?: string): Promise<EmailVerification> {
    return (await this.repository.findOne({
      ...this.parameterConverter.convert(params),
    })) as unknown as EmailVerification | null;
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
