export interface IHasher {
    hash(text: string): string;
    compare(hash: string, text:string): boolean;
  }