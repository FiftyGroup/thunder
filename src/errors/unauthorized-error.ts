import BaseError from './base-error';

export default class Unauthorized extends BaseError {
  statusCode = 401;
  reason: string;
  constructor(message: string) {
    super();
    this.reason = message;
    Object.setPrototypeOf(this, Unauthorized.prototype);
  }
  serializeErrors(): { message: string; field?: string | undefined }[] {
    return [{ message: this.reason }];
  }
}
