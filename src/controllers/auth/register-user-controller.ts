import { Request, Response } from 'express';
import { RegisterService } from '../../services/register-service';

export const RegisterController = async (req: Request, res: Response) => {
  const { fullName, username, email, password } = req.body;
  await RegisterService(fullName, username, email, password);

  return res.status(201).json({ message: 'Registro bem-sucedido' });
};