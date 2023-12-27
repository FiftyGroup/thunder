import { sessionRepository } from "../../../repositories/SessionRepository";
import { ISessionRepository } from "../../../repositories/interfaces/ISessionRepository";

class Logout {
    constructor(private readonly sessionRepository: ISessionRepository){
        this.sessionRepository = sessionRepository
    }
   async execute(refreshToken:string){
        await this.sessionRepository.deleteOneByToken(refreshToken)
    }
}

export const logout = new Logout(sessionRepository)