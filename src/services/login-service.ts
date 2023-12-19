import { PrismaClient } from "@prisma/client";
import bcrypt from "bcrypt";
import jvt from "jsonwebtoken";
import Unauthorized from "../errors/unauthorized-error";

const prisma = new PrismaClient();

export const loginService = async (username: string, password: string) => {
  const user = await prisma.user.findFirst({
    where: {
      username,
      password,
    },
  });
  
  const equalPassword = bcrypt.compare(password, user.password);

  if (!equalPassword) {
    throw new Unauthorized("Invalid username or password");
  }
  
  return user;
};

export const generateTokenService = async (username: string) =>
  jvt.sign({ username }, process.env.JWT_SECRET, { expiresIn: "7d" });
