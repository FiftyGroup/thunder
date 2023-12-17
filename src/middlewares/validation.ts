import { validate } from 'class-validator';
import { ISerializeError } from '../errors/not-found-error';
import { BadRequestError } from '../errors';
import { NextFunction, Request } from 'express';

class ValidationMiddleware {
  async validator(data: any): Promise<ISerializeError[]> {
    const validationErrors = await validate(data);
    if (!validationErrors || validationErrors.length < 1) {
      return [];
    }
    const errors = validationErrors.map((i) => {
      const messages = [];
      for (const prop in i.constraints) {
        messages.push(i.constraints[prop]);
      }
      return {
        field: i.property,
        message: messages,
      };
    });
    return errors;
  }

  handle(dto: any) {
    return async (req: Request, _, next: NextFunction) => {
      const instancedDTO = new dto();
      for (const field in instancedDTO) {
        if (req.body[field]) {
          instancedDTO[field] = req.body[field];
        }
      }
      const errors = await this.validator(instancedDTO);
      throw new BadRequestError(errors);
      next();
    };
  }
}

const validationMiddleware = new ValidationMiddleware();

export default validationMiddleware.handle.bind(validationMiddleware);