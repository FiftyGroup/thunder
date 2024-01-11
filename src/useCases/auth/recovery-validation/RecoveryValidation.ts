import { IRecoveryValidation } from "../../../domain/useCases/IRecoveryValidation";
import { BadRequestError } from "../../../errors";
import { IRecoveryRespository } from "../../../infra/database/interfaces/IRecoveryRepository";


export default class RecoveryValidation implements IRecoveryValidation {
  constructor(
    private readonly RecoveryRepository: IRecoveryRespository,
  ) { }
  async execute(secretCode: string): Promise<void> {
    const recovery = await this.RecoveryRepository.findOne({
      select: {
        used: true,
      },
      secretCode
    });

    if (!recovery) {
      throw new BadRequestError([
        { message: "Invalid reset code.", field: "secretCode" },
      ]);
    }
    if (recovery.used) {
      throw new BadRequestError([
        { message: "Reset code has already been used.", field: "secretCode" },
      ]);
    }
  }
}
