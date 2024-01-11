export interface IRecoveryValidation {
  execute(secretCode: string): Promise<void>
}