import { Recovery } from "@prisma/client";
import { prisma } from "../utils/prisma";
import { genSalt, hash } from 'bcryptjs';
import BadRequestError from "../errors/bad-request-error";
import { errorHandler } from "../errors/error-handler";

export const PasswordResetService = async (
  secret: string,
  password: string,
) => {
  if (password.length < 8) {
    throw new BadRequestError([
      { message: "Senha muito pequena.", field: "password" },
    ]);
  }
  if (password.length > 20) {
    throw new BadRequestError([
      { message: "Senha muito grande.", field: "password" },
    ]);
  }

  const recoveryData: Recovery | null = await prisma.recovery.findFirst({
    where: {
      secretCode: secret
    },
  });

  if (!recoveryData || recoveryData.used) {
    throw new Error('Invalid or expired secret code');
  }

  const salt = await genSalt(12);
  const passwordHash = await hash(password, salt);

  await prisma.user.update({
    where: {
      id: recoveryData.userId
    },
    data: {
      password: passwordHash,
    },
  });

  await prisma.recovery.update({
    where: {
      id: recoveryData.id
    },
    data: {
      used: true
    },
  });
}