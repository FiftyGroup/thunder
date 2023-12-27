import { Prisma } from "@prisma/client";
import { Session } from "../../domain/entities/Session";

interface ISessionRepository {
    getOne(props: IGetSessionProps): Promise<Session | null>;
    deleteOneByToken(id: string): Promise<void>;
    save(sessionData: Partial<Session>): Promise<void>;
}

interface IGetSessionProps {
    search?: {
        id?: string;
        userId?: string;
        refreshToken?: string;
    };
    select?: Prisma.SessionSelect;
}

export { ISessionRepository, IGetSessionProps };
