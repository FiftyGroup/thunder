import NotFoundError from '../errors/not-found-error';
import BadRequestError from '../errors/bad-request-error';
import { prisma } from '../utils/prisma';

class findByUsernameService {
  async handle(username: string) {
    if (username.length > 15) {
      throw new BadRequestError([
        { message: "Username too long.", field: "username" },
      ]);
    }

    const searchUsername = await prisma.user.findUnique({
      where: {
        username,
      },
      select: {
        fullName: true,
        username: true,
        email: false,
        password: false,
      },
    });

    if (!searchUsername) {
      throw new NotFoundError('User not found.');
    }
    return searchUsername;
  }
};

const FindByUsernameService = new findByUsernameService();
export default FindByUsernameService;