import { Request, Response } from "express";
import { findByEmailService } from "../../services/recovery-service";

export const RecoveryController = async (req: Request, res: Response) => {
  const { email } = req.body;
  
  await findByEmailService(email);

  res.status(201).send("Password reset email sent!");
};
