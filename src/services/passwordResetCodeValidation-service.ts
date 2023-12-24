import { prisma } from "../utils/prisma";
import BadRequestError from "../errors/bad-request-error";
import AnyHttpError from "../errors/any-http-error";
import NotFoundError from "../errors/not-found-error";

export const PasswordResetCodeValidationService = async (
  secret: string,
) => {
  const recoveryData = await prisma.recovery.findFirst({
    where: {
      secretCode: secret,
    },
  });

  if (!recoveryData) {
    throw new BadRequestError([
      { message: "Invalid reset code.", field: "secret" },
    ]);
  }
  if (!recoveryData.used) {
    throw new BadRequestError([
      { message: "Reset code has already been used.", field: "secret" },
    ]);
  }
}