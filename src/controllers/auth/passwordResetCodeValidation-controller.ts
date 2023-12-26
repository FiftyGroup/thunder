import { Request, Response } from 'express';
import passwordResetCodeValidationService from '../../services/passwordResetCodeValidation-service';

export class passwordResetCodeValidationController {
  async handle(req: Request, res: Response) {
    const { secret } = req.params;

    await passwordResetCodeValidationService.handle(secret);
    return res.status(200).json({ message: 'Reset code is valid.' });
  }
}

const PasswordResetCodeValidationController = new passwordResetCodeValidationController();
export default PasswordResetCodeValidationController;