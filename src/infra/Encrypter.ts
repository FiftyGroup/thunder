import jwt from "jsonwebtoken";
import { IEncrypter } from "./interfaces/IEncrypter";
import { config } from "dotenv";
config();
export default class Encrypter implements IEncrypter {
  private readonly secretKey: string;

  constructor(secretKey: string) {
    this.secretKey = secretKey;
  }

  encrypt(obj: Object): string {
    const token = jwt.sign(obj, this.secretKey);
    return token;
  }

  decrypt(token: string): { success: boolean; data: Object } {
    try {
      const decoded = jwt.verify(token, this.secretKey);
      return { success: true, data: decoded as Object };
    } catch (error) {
      return { success: false, data: {} };
    }
  }
}
