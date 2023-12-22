import { prisma } from '../utils/prisma';
import ConflictError from '../errors/conflict-error';
import { hash, genSalt } from 'bcryptjs'
import { MailProducer } from '../app';

export const RegisterService = async (
  fullName: string,
  username: string,
  email: string,
  password: string,
) => {
  const emailExist = await prisma.user.findUnique({
    where: {
      email: email,
    },
  });
  const usernameExist = await prisma.user.findUnique({
    where: {
      username: username,
    },
  });

  if (emailExist && usernameExist) {
    throw new ConflictError([
      { message: "Em uso", field: "email" },
      { message: "Em uso", field: "username" },
    ]);
  }

  if (emailExist) {
    throw new ConflictError([
      { message: "Em uso", field: "email" },
    ]);
  }

  if (usernameExist) {
    throw new ConflictError([
      { message: "Em uso", field: "username" },
    ]);
  }

  const salt = await genSalt(12)
  const passwordHash = await hash(password, salt)
  await prisma.user.create({
    data: {
      fullName,
      username,
      email,
      password: passwordHash,
      role: 'user',
    },
  });
  await MailProducer.publish({
    type:"ACCOUNT_CREATED",
    data:{
      fullName,
      username,
      email,
    }
  })
};