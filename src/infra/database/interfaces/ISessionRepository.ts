import { Session } from "../../../domain/entities/Session";
import {
  AdvancedSearch,
  ConditionalSearch,
  IGetManyParams,
  ISelection,
} from "./IParams";
export interface ISessionRepository {
  save(session: Session, tid?: string): Promise<void>;
  findOne(params: IFindOne): Promise<Session | null>;
  deleteOne(params: IFindOne, tid?: string): Promise<void>;
  deleteMany(params: IFindOne, tid?: string): Promise<void>;
  updateOne(
    params: IFindOne,
    data: Partial<Session>,
    tid?: string
  ): Promise<void>;
}

export interface IFindOne extends AdvancedSearch<Session> {
  select: ISelection<Session>;
  conditionalSearch?: ConditionalSearch<Session>;
}

export interface IFindMany extends AdvancedSearch<Session>, IGetManyParams {
  select: ISelection<Session>;
  conditionalSearch?: ConditionalSearch<Session>;
}
