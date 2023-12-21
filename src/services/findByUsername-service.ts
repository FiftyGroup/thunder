import BadRequestError from '../errors/bad-request-error';
import NotFoundError from '../errors/not-found-error';
import { prisma } from '../utils/prisma';

export const findByUsernameService = async (
  username: string,
) => {
  if (username.length > 15) {
    throw new NotFoundError('Username muito grande.');
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
    throw new NotFoundError('Usuário não encontrado.');
  }
  return searchUsername;
};