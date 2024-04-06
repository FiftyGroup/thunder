import BaseError from './base-error';
import { ISerializeError } from './not-found-error';

export default class BadRequestError extends BaseError {
  statusCode = 400;
  reason: ISerializeError[];
  constructor(message: ISerializeError[]) {
    super();
    this.reason = message;
    Object.setPrototypeOf(this, BadRequestError.prototype);
  }
  serializeErrors(): {
    message: string | string[];
    field?: string | undefined;
  }[] {
    return this.reason;
  }
}
