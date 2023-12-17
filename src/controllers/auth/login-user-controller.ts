// import { prisma } from '../../utils/prisma'
import { Request, Response } from 'express';

export const LoginController = async (req: Request, res: Response) => {
  res.send('Login Body validated!');
};
