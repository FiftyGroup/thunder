import BaseError from "./base-error";
import { ISerializeError } from "./not-found-error";

export default class ConflictError extends BaseError {
  statusCode = 409;
  reason: ISerializeError[];
  constructor(message: ISerializeError[]) {
    super();
    this.reason = message;
    Object.setPrototypeOf(this, ConflictError.prototype);
  }
  serializeErrors(): {
    message: string | string[];
    field?: string | undefined;
  }[] {
    return this.reason;
  }
}
