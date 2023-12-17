import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

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
