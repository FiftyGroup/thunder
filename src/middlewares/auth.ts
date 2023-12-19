import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
import { Unauthorized } from '../errors';
import config from '../config/custom-environment-variables'

dotenv.config();

const authMiddleware = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const authHeader = req.headers.authorization;
    const token = authHeader.split(" ")[1];
    const { id, username } = jwt.verify(token, config.JWT_SECRET) as unknown as any;
    req.user = {
      id,
      username,
    };
    next();
  } catch {
    throw new Unauthorized("Valid jwt token required");
  }
};
export default authMiddleware;