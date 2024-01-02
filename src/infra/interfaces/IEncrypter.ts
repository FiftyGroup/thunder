export interface IEncrypter {
  encrypt(obj: Object, time: number): string;
  decrypt(token: string): { success: boolean; data: any };
}
