import { NextFunction, Request, Response } from 'express';
import { BaseError } from './index';
export const errorHandler = (
  err: Error | BaseError,
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  if (err instanceof BaseError) {
    return res
      .status(err['statusCode'])
      .send({ errors: err.serializeErrors() });
  }
  console.log(err);
  return res
    .status(500)
    .send({ errors: [{ message: 'something went wrong ):' }] });
};
