import { IRecoveryValidation } from "../../../domain/useCases/IRecoveryValidation";
import { BadRequestError } from "../../../errors";
import { IRecoveryRespository } from "../../../infra/database/interfaces/IRecoveryRepository";


export default class RecoveryValidation implements IRecoveryValidation {
  constructor(
    private readonly RecoveryRepository: IRecoveryRespository,
  ) { }
  async execute(secretCode: string): Promise<void> {
    const user = await this.RecoveryRepository.findOne({
      select: {},
      secretCode
    });

    if (!user) {
      throw new BadRequestError([
        { message: "Invalid reset code.", field: "secretCode" },
      ]);
    }
    if (user.used) {
      throw new BadRequestError([
        { message: "Reset code has already been used.", field: "secretCode" },
      ]);
    }
  }
}
