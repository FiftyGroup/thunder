import { Request, Response } from "express";
import { IRecoveryValidation } from "../../../domain/useCases/IRecoveryValidation";

export default class RecoveryValidationController {
  constructor(private readonly RecoveryValidation: IRecoveryValidation) { }

  async handle(req: Request, res: Response) {
    const { secretCode } = req.params;
    await this.RecoveryValidation.execute(secretCode);
    res.status(200).json({ message: "Reset code is valid." });
  };
}
