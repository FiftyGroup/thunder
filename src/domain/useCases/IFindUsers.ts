import { User } from "../entities/User";

export interface IFindUsers {
  find(data: { name: string }, page: number): Promise<User[]>;
}
