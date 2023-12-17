import BaseError from './base-error';

export default class NotFoundError extends BaseError {
  statusCode = 404;
  message: any;
  constructor(message: string) {
    super();
    this.message = message;
    Object.setPrototypeOf(this, NotFoundError.prototype);
  }
  serializeErrors(): { message: string; field?: string | undefined }[] {
    return [{ message: this.message }];
  }
}
export interface ISerializeError {
  message: string | string[];
  field?: string;
}
