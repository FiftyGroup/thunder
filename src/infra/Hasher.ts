import bcrypt from "bcryptjs";
import { IHasher } from "./interfaces/IHasher";

export default class Hasher implements IHasher {
  private readonly saltRounds: number;
  constructor(saltRounds: number = 10) {
    this.saltRounds = saltRounds;
  }
  hash(text: string): string {
    return bcrypt.hashSync(text, this.saltRounds);
  }
  compare(hash: string, text: string): boolean {
    return bcrypt.compareSync(text, hash);
  }
}
