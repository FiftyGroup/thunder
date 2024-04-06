import { Request, Response } from "express";
import { IRecoveryPassword } from "../../../domain/useCases/IRecoveryPassword";
import { RecoveryPasswordDTO } from "./RecoveryPasswordDTO";

export default class RecoveryPasswordController {
  constructor(private readonly RecoveryPassword: IRecoveryPassword) { }

  async handle(req: Request, res: Response) {
    const { email } = req.body as unknown as RecoveryPasswordDTO;
    await this.RecoveryPassword.execute({ email });
    res.status(200).json({ message: "Password change request sent successfully" });
  };
}
