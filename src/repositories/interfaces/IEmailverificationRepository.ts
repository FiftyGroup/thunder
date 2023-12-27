import { Prisma } from "@prisma/client";
import { EmailVerification } from "../../domain/entities/EmailVerification";

interface IEmailVerificationRepository {
    getOne(props: IGetVerificationProps): Promise<EmailVerification | null>;
    save(verification: Partial<EmailVerification>): Promise<void>;
}

interface IGetVerificationProps {
    search?: {
        id?: string;
        email?: string;
        secretCode?: string;
        username?: string;
        userId?: string;
    };
    select: Prisma.EmailVerificationSelect;
}

export { IEmailVerificationRepository, IGetVerificationProps };
