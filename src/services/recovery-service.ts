import { PrismaClient } from "@prisma/client";
import jvt from "jsonwebtoken";
import Unauthorized from "../errors/unauthorized-error";
import { PasswordRecoveryPublisher } from "../app";

const prisma = new PrismaClient();

export const generateTokenService = (id: string) =>
  jvt.sign({ id }, process.env.JWT_SECRET, { expiresIn: "1h" });

export const findByEmailService = async (email: string) => {
  const userData = await prisma.user.findFirst({
    where: {
      email,
    },
  });

  if (!userData) {
    throw new Unauthorized("Invalid email");
  }

  const token = generateTokenService(userData.id)
  
  await PasswordRecoveryPublisher.publish({
    type:"RECOVERY_PASSWORD",
    data: {
      email: userData.email,
      secretCode: token,
      username: userData.username,
    }
  });
};
