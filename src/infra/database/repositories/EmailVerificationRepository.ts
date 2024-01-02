import {
  IEmailVerificationRepository,
  IFindOne,
} from "../interfaces/IEmailVerificationRepository";
import { EmailVerificationModel } from "../models/EmailVerificationModel";
import { EmailVerification } from "../../../domain/entities/EmailVerification";
import { ParameterConverter } from "../ParameterConverter";

export class EmailVerificationRepository
  implements IEmailVerificationRepository
{
  repository = EmailVerificationModel;
  parameterConverter: ParameterConverter;
  constructor(parameterConverter: ParameterConverter) {
    this.parameterConverter = parameterConverter;
  }
  async save(
    emailVerification: EmailVerification,
    tid?: string
  ): Promise<void> {
    await this.repository.create({ ...emailVerification });
  }
  async findOne(params: IFindOne, tid?: string): Promise<EmailVerification> {
    return (await this.repository.findOne({
      ...this.parameterConverter.convert(params),
    })) as unknown as EmailVerification | null;
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
