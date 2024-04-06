import BaseError from './base-error';

export default class ForbiddenError extends BaseError {
  statusCode = 403;
  reason: string;
  constructor(message: string) {
    super();
    this.reason = message;
    Object.setPrototypeOf(this, ForbiddenError.prototype);
  }
  serializeErrors(): { message: string; field?: string | undefined }[] {
    return [{ message: this.reason }];
  }
}
