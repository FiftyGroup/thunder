import { Request, Response } from 'express';

export const createUserController = async (req: Request, res: Response) => {
  res.send('Body validated!');
};
