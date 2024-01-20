import { IRecoveryReset } from "../../../domain/useCases/IRecoveryReset";
import { BadRequestError } from "../../../errors";
import { IRecoveryRespository } from "../../../infra/database/interfaces/IRecoveryRepository";
import { IUserRepository } from "../../../infra/database/interfaces/IUserRepository";
import { IHasher } from "../../../infra/interfaces/IHasher";
import { Transaction } from "../../../infra/database/Transaction";
import { IPubliser } from "../../../infra/interfaces/IPublisher";


export default class RecoveryReset implements IRecoveryReset {
  constructor(
    private readonly userRepository: IUserRepository,
    private readonly RecoveryRepository: IRecoveryRespository,
    private readonly hasher: IHasher,
    private readonly transaction: Transaction,
  ) { }
  async execute(secretCode: string, password: string): Promise<void> {
    const recovery = await this.RecoveryRepository.findOne({
      secretCode: secretCode,
      select: {
        used: true,
        userId: true,
      },
    });

    if (!recovery || recovery.used) {
      throw new Error('Invalid or expired secret code');
    }

    await this.transaction.run(async (tid) => {
      const userId = recovery.userId;
      await this.RecoveryRepository.updateOne(
        {
          select: {},
          userId,
        },
        {
          used: false,
        }, tid);
      await this.userRepository.updateOne(
        {
          select: {},
          id: userId,
        },
        {
          password: this.hasher.hash(password),
        }, tid);
    });
  }
};
