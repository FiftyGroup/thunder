import { Request, Response } from 'express';
import { PasswordResetCodeValidationService } from '../../services/passwordResetCodeValidation-service';

export const passwordResetCodeValidationController = async (req: Request, res: Response) => {
  const { secret } = req.params;

  await PasswordResetCodeValidationService(secret);
  return res.status(200).json({ message: 'Reset code is valid.' });
}