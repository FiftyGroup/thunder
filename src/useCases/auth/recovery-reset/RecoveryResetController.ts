import { Request, Response } from "express";
import { IRecoveryReset } from "../../../domain/useCases/IRecoveryReset";

export default class RecoveryResetController {
  constructor(private readonly RecoveryReset: IRecoveryReset) { }

  async handle(req: Request, res: Response) {
    const { secretCode } = req.params;
    const { password } = req.body;

    await this.RecoveryReset.execute(secretCode, password);
    res.status(200).json({ message: 'Password reset successfully' });
  };
}
