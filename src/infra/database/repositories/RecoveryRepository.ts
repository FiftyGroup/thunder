import { IFindOne } from "../interfaces/IRecoveryRepository";
import { RecoveryModel } from "../models/RecoveryModel";
import { Recovery } from "../../../domain/entities/Recovery";
import { ParameterConverter } from "../ParameterConverter";
import { IRecoveryRespository } from "../interfaces/IRecoveryRepository";

export class RecoveryRepository implements IRecoveryRespository {
  repository = RecoveryModel;
  constructor(private readonly parameterConverter: ParameterConverter) {}
  async save(recovery: Recovery, tid?: string): Promise<void> {
    await this.repository.create({
      ...recovery,
    });
  }
  async findOne(params: IFindOne, tid?: string): Promise<Recovery> {
    return (await this.repository.findOne({
      ...this.parameterConverter.convert(params),
    })) as unknown as Recovery | null;
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
