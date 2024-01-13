import { EmailVerification } from "../../../domain/entities/EmailVerification";
import {
  AdvancedSearch,
  ConditionalSearch,
  IGetManyParams,
  ISelection,
} from "./IParams";
export interface IEmailVerificationRepository {
  save(emailVerification: EmailVerification, tid?: string): Promise<void>;
  findOne(params: IFindOne): Promise<EmailVerification | null>;
  deleteOne(params: IFindOne, tid?: string): Promise<void>;
  deleteMany(params: IFindOne, tid?: string): Promise<void>;
  updateOne(
    params: IFindOne,
    data: Partial<EmailVerification>,
    tid?: string
  ): Promise<void>;
}

export interface IFindOne extends AdvancedSearch<EmailVerification> {
  select: ISelection<EmailVerification>;
  conditionalSearch?: ConditionalSearch<EmailVerification>;
}

export interface IFindMany
  extends AdvancedSearch<EmailVerification>,
    IGetManyParams {
  select: ISelection<EmailVerification>;
  conditionalSearch?: ConditionalSearch<EmailVerification>;
}
