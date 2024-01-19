export interface IRecoveryReset {
  execute(secretCode: string, password: string): Promise<void>
}