import { Request, Response } from 'express';
import { findByUsernameService } from '../../services/findByUsername-service';
import NotFoundError from '../../errors/not-found-error';

export const findByUsername = async (req: Request, res: Response) => {
  const { username } = req.params;
  const User = await findByUsernameService(username);

  return res.status(200).json({ User })
}