import { PrismaClient } from '@prisma/client';
import { Request, Response } from 'express';

export const createUserController = async (req: Request, res: Response) => {
  const prisma = new PrismaClient();
  await prisma.user.create({
    data: {
      email: 'Teste@gmail.com',
      fullName: 'Lucca',
      role: 'user',
      password: 'hashedPassword',
      username: 'luquetin',
    },
  });
  res.send('Body validated!');
};
