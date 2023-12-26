import { Request, Response } from 'express';
import passwordResetService from '../../services/passwordReset-service';

export class resetPassword {
  async handle(req: Request, res: Response) {
    const { secret } = req.params;
    const { password } = req.body;

    await passwordResetService.handle(secret, password);
    return res.status(200).json({ message: 'Password reset successfully' });
  }
}

const ResetPassword = new resetPassword();
export default ResetPassword;