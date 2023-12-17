import { PrismaClient } from '@prisma/client';
import { Request, Response } from 'express';

export const createUserController = async (req: Request, res: Response) => {
  const prisma = new PrismaClient();
  await prisma.user.create({
    data: {
      email: 'fiftycontactbr@gmail.com',
      fullName: 'JulioDeveloper',
      role: 'user',
      password: 'hashedPassword',
      username: 'Julio',
    },
  });
  res.send('Body validated!');
};
