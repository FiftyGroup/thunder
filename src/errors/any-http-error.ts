import BaseError from './base-error';

export default class AnyHttpError extends BaseError {
  statusCode: number;
  reason: string;
  constructor(status: number, message: string) {
    super();
    this.reason = message;
    this.statusCode = status;
    Object.setPrototypeOf(this, AnyHttpError.prototype);
  }
  serializeErrors(): { message: string; field?: string | undefined }[] {
    return [{ message: this.reason }];
  }
}
