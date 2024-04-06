export interface IRecoveryPassword {
  execute(data: {
    email: string;
  }): Promise<void>;
}