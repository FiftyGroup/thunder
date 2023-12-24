import { Request, Response } from 'express';
import { PasswordResetService } from '../../services/passwordReset-service';

export const resetPassword = async (req: Request, res: Response) => {
  const { secret } = req.params;
  const { password } = req.body;

  await PasswordResetService(secret, password);
  return res.status(200).json({ message: 'Password reset successfully' });
}