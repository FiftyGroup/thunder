import { PrismaClient } from "@prisma/client";
import jvt from "jsonwebtoken";
import Unauthorized from "../errors/unauthorized-error";

const prisma = new PrismaClient();

export const findByEmailService = async (email: string) => {
  const user = await prisma.user.findFirst({
    where: {
      email,
    },
  });

  if (!user) {
    throw new Unauthorized("Invalid email");
  }

  return user;
};

export const generateTokenService = (id: string, hr: string) =>
  jvt.sign({ id }, process.env.JWT_SECRET, { expiresIn: hr });
