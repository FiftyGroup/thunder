import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";
import { config } from "dotenv";
import { Unauthorized } from "../errors";
config();
const SECRET = process.env.JWT_SECRET;
const authMiddleware = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const authHeader = req.headers.authorization;
    const token = authHeader.split(" ")[1];
    const { id, username } = jwt.verify(token, SECRET) as unknown as any;
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
