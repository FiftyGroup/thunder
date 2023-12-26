import { Request, Response } from 'express';
import registerService from '../../services/register-service';

export class RegisterController {
  async handle(req: Request, res: Response) {
    const { fullName, username, email, password } = req.body;
    await registerService.handle(fullName, username, email, password);

    return res.status(201).json({ message: 'Successfully registered.' });
  }
};

const registerController = new RegisterController();
export default registerController;