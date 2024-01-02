import { Session } from "../../../domain/entities/Session";
import { ILogin } from "../../../domain/useCases/ILogin";
import { ForbiddenError, Unauthorized } from "../../../errors";
import { ISessionRepository } from "../../../infra/database/interfaces/ISessionRepository";
import { IUserRepository } from "../../../infra/database/interfaces/IUserRepository";
import { IEncrypter } from "../../../infra/interfaces/IEncrypter";
import { IHasher } from "../../../infra/interfaces/IHasher";

const REFRESH_TOKEN_EXPIRATION = 30 * 24 * 60 * 60;

const TMP_TOKEN_EXPIRATION = 600;

export default class Login implements ILogin {
  constructor(
    private readonly userRepository: IUserRepository,
    private readonly sessionRepository: ISessionRepository,
    private readonly hasher: IHasher,
    private readonly encrypter: IEncrypter
  ) {}
  async auth(data: { username: string; password: string }): Promise<{
    username: string;
    email: string;
    id: string;
    token: string;
    refreshToken: string;
  }> {
    const user = await this.userRepository.findOne({
      username: data.username,
      select: {
        email: true,
        id: true,
        password: true,
        isVerified: true,
      },
    });
    if (!user) {
      throw new Unauthorized("Invalid username or password");
    }
    if (!user.isVerified) {
      throw new ForbiddenError("user not verified yet");
    }
    if (!this.hasher.compare(user.password, data.password)) {
      throw new Unauthorized("Invalid username or password");
    }
    const tmpToken = this.encrypter.encrypt(
      { id: user.id },
      TMP_TOKEN_EXPIRATION
    );
    const refreshToken = this.encrypter.encrypt(
      { id: user.id },
      REFRESH_TOKEN_EXPIRATION
    );
    const session = new Session({
      ip: "",
      userAgent: "",
      refreshToken,
      userId: user.id,
      username: data.username,
    });
    await this.sessionRepository.save(session);

    return {
      token: tmpToken,
      email: user.email,
      id: user.id,
      refreshToken: refreshToken,
      username: data.username,
    };
  }
}
