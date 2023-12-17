// import { prisma } from '../../utils/prisma'
import { Request, Response } from 'express';

export const RegisterController = async (req: Request, res: Response) => {
  res.send('Body validated!');
};
