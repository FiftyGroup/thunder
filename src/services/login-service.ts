import { PrismaClient } from "@prisma/client";
import bcrypt from "bcrypt";
import jvt from "jsonwebtoken";
import Unauthorized from "../errors/unauthorized-error";

const prisma = new PrismaClient();

export const loginService = async (username: string, password: string) => {
  const user = await prisma.user.findFirst({
    where: {
      username,
    },
  });
  if (!user) {
    throw new Unauthorized("Invalid username or password");
  }

  const equalPassword = await bcrypt.compare(password, user.password);
  if (!equalPassword) {
    throw new Unauthorized("Invalid username or password");
  }

  return user;
};

export const generateTokenService = async (id: string) =>
  jvt.sign({ id }, process.env.JWT_SECRET, { expiresIn: "1h" });

export const refreshTokenService = async (token: string) => {
  const decodedToken = jvt.verify(token, process.env.JWT_SECRET) as { id: string };
  const newToken = jvt.sign({ id: decodedToken.id }, process.env.JWT_SECRET, { expiresIn: "7d" });

  return newToken;
};

export const setTokenExpirationService = async (token: string) => {
  const decodedToken = jvt.verify(token, process.env.JWT_SECRET) as { id: string, exp: number };

  const expirationDate = new Date(decodedToken.exp * 1000);

  return {
    token: jvt.sign({ id: decodedToken.id }, process.env.JWT_SECRET, { expiresIn: "7d" }),
    expirationDate: expirationDate.toISOString(),
  };
};
