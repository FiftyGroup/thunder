import {Request, Response} from 'express';
import { UserSearchService } from '../../../services/search/user/UserSearchService';

export class UserSearchController {
  private userSearchService = new UserSearchService();

  async getUsersByName(req: Request, res: Response) {
    const name = req.query.name as string || '';
    const page = parseInt(req.query.page as string) || 1;

    try {
      const result = await this.userSearchService.getUsersByName(name, page);
      res.json({
        users: result.users,
        totalPages: Math.ceil(result.totalCount / 10)
      })
    } catch (error) {
      res.status(500).send(error.message);
    }
  }
}