import { Prisma } from "@prisma/client";
import { Recovery } from "../../domain/entities/Recovery";

interface IRecoveryRepository {
    getOne(props: IGetRecoveryProps): Promise<Recovery | null>;
    save(verification: Partial<Recovery>): Promise<void>;
}

interface IGetRecoveryProps {
    search?: {
        id?: string;
        secretCode?: string;
        userId?: string;
    };
    select?: Prisma.RecoverySelect;
}

export { IRecoveryRepository, IGetRecoveryProps };
