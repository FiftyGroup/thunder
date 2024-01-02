import { ISessionRepository } from "../../../infra/database/interfaces/ISessionRepository";

export class Logout {
  constructor(private readonly sessionRepository: ISessionRepository) {
    this.sessionRepository = sessionRepository;
  }
  async execute(refreshToken: string) {
    await this.sessionRepository.deleteOne({ select: {}, refreshToken });
  }
}
