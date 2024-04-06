import { User } from "../../../domain/entities/User";
import {
  AdvancedSearch,
  ConditionalSearch,
  IGetManyParams,
  ISelection,
} from "./IParams";
export interface IUserRepository {
  save(user: User, tid?: string): Promise<void>;
  findOne(params: IFindOne): Promise<User | null>;
  findMany(params: IFindMany): Promise<User[]>;
  deleteOne(params: IFindOne, tid?: string): Promise<void>;
  deleteMany(params: IFindOne, tid?: string): Promise<void>;
  updateOne(params: IFindOne, data: Partial<User>, tid?: string): Promise<void>;
}

export interface IFindOne extends AdvancedSearch<User> {
  select: ISelection<User>;
  conditionalSearch?: ConditionalSearch<User>;
}

export interface IFindMany extends AdvancedSearch<User>, IGetManyParams {
  select: ISelection<User>;
  conditionalSearch?: ConditionalSearch<User>;
}
