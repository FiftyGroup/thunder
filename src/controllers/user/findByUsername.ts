import { Request, Response } from 'express';
import FindByUsernameService from '../../services/findByUsername-service';
import NotFoundError from '../../errors/not-found-error';

class findByUsername {
  async handle(req: Request, res: Response) {
    const { username } = req.params;
    const User = await FindByUsernameService.handle(username);

    return res.status(200).json({ User })
  }
}

const FindByUsername = new findByUsername();
export default FindByUsername;