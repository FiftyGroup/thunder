import { Recovery } from "../../../domain/entities/Recovery";
import {
  AdvancedSearch,
  ConditionalSearch,
  IGetManyParams,
  ISelection,
} from "./IParams";
export interface IRecoveryRespository {
  save(recovery: Recovery, tid?: string): Promise<void>;
  findOne(params: IFindOne): Promise<Recovery | null>;
  deleteOne(params: IFindOne, tid?: string): Promise<void>;
  deleteMany(params: IFindOne, tid?: string): Promise<void>;
  updateOne(
    params: IFindOne,
    data: Partial<Recovery>,
    tid?: string
  ): Promise<void>;
}

export interface IFindOne extends AdvancedSearch<Recovery> {
  select: ISelection<Recovery>;
  conditionalSearch?: ConditionalSearch<Recovery>;
}

export interface IFindMany extends AdvancedSearch<Recovery>, IGetManyParams {
  select: ISelection<Recovery>;
  conditionalSearch?: ConditionalSearch<Recovery>;
}
