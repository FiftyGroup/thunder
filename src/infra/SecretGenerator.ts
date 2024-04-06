import { ISecretGenerator } from "./interfaces/ISecretGenerator";
import { generate } from "generate-password";
export default class SecretGenerator implements ISecretGenerator {
  constructor(
    private readonly options: {
      length: number;
      numbers: boolean;
      symbols: boolean;
      uppercase: boolean;
    }
  ) {}
  generate(): string {
    const { length, numbers, symbols, uppercase } = this.options;
    return generate({
      length,
      numbers,
      symbols,
      uppercase,
    });
  }
}
