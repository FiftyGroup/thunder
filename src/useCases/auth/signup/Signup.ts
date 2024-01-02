import { EmailVerification } from "../../../domain/entities/EmailVerification";
import { User } from "../../../domain/entities/User";
import { ISignup } from "../../../domain/useCases/ISignup";
import ConflictError from "../../../errors/conflict-error";
import { Transaction } from "../../../infra/database/Transaction";
import { IEmailVerificationRepository } from "../../../infra/database/interfaces/IEmailVerificationRepository";
import { IUserRepository } from "../../../infra/database/interfaces/IUserRepository";
import { IHasher } from "../../../infra/interfaces/IHasher";
import { IPubliser } from "../../../infra/interfaces/IPublisher";
import { ISecretGenerator } from "../../../infra/interfaces/ISecretGenerator";

export default class Signup implements ISignup {
  constructor(
    private readonly userRepository: IUserRepository,
    private readonly emailVerificationRepository: IEmailVerificationRepository,
    private readonly publisher: IPubliser,
    private readonly secretGenerator: ISecretGenerator,
    private readonly hasher: IHasher,
    private readonly transaction: Transaction
  ) {}
  async execute(data: {
    username: string;
    password: string;
    email: string;
    fullName: string;
  }): Promise<void> {
    const { email, fullName, password, username } = data;
    const userExist = await this.userRepository.findMany({
      limit: 2,
      offset: 0,
      select: {
        email: true,
        username: true,
      },
      conditionalSearch: {
        email,
        username,
      },
    });
    if (userExist.length === 2) {
      throw new ConflictError([
        { message: "Already taken", field: "email" },
        { message: "Already taken", field: "username" },
      ]);
    }
    if (userExist.length === 1) {
      if (userExist[0].email === email && userExist[0].username === username) {
        throw new ConflictError([
          { message: "Already taken", field: "email" },
          { message: "Already taken", field: "username" },
        ]);
      }
      if (userExist[0].email === email) {
        throw new ConflictError([{ message: "Already taken", field: "email" }]);
      }
      throw new ConflictError([
        { message: "Already taken", field: "username" },
      ]);
    }
    const user = new User({
      email,
      fullName,
      password: this.hasher.hash(password),
      username,
    });
    const secretCode = this.secretGenerator.generate();
    const emailVerification = new EmailVerification({
      email,
      userId: user.id,
      username,
      secretCode,
    });
    await this.transaction.run(async (tid) => {
      await this.userRepository.save(user, tid);
      await this.emailVerificationRepository.save(emailVerification, tid);
      await this.publisher.publish({
        type: "ACCOUNT_CREATED",
        data: {
          email,
          username,
          secretCode,
          fullName,
        },
      });
    });
  }
}
