import { User } from "../entities/User";

export interface IFindByUsername {
  execute(data: {
    username: string;
  }): Promise<{
    username: string;
    fullName: string;
    roles: string[];
    createdAt: string;
  }>;
}

