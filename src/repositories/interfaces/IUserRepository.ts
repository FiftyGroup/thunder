import { Prisma } from "@prisma/client";
import { User } from "../../domain/entities/User";

interface IUserRepository {
    getOne(props: IGetUserProps): Promise<User | null>;
    save(user: User): Promise<void>;
}

interface IGetUserProps {
    search?: {
        email?: string;
        id?: string;
        username?: string;
    };
    select?: Prisma.UserSelect;
}

export { IUserRepository, IGetUserProps };
