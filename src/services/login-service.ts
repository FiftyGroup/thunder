import { PrismaClient } from "@prisma/client";
import jvt from "jsonwebtoken";

const prisma = new PrismaClient();

export const loginService = async (username: string, password: string) => {
  const user = await prisma.user.findFirst({
    where: {
      username,
      password,
    },
  });

  return user;
};

export const findByUsernameService = async (username: string) => {
  return await prisma.user.findUnique({
    where: {
      username,
    },
  });
};

export const generateTokenService = (id, hr) =>
  jvt.sign({ id: id }, process.env.SECRET_JVT, { expiresIn: hr });