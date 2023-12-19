import { prisma } from '../utils/prisma'

export const logoutService = async (
  refreshToken: string,
  userId: string,
  username: string
) => {
  await prisma.session.delete({
    where: {
      refreshToken,
      userId,
      username,
    },
  });
};