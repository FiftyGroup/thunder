import { randomUUID } from "crypto";
import { User } from "./User";

export class EmailVerification {
  public readonly id: string;
  public readonly username: string;
  public readonly email: string;
  public readonly createdAt: string;
  public readonly expiresAt: string;
  public readonly userId: string;
  public readonly user: User;
  public readonly used: boolean;
  public readonly secretCode: string;

  constructor(props: IEmailVerificationProps) {
    this.id = randomUUID();
    this.username = props.username;
    this.email = props.email;
    this.createdAt = new Date().toISOString();
    this.expiresAt = new Date(Date.now() + 24 * 60 * 60 * 1000).toISOString();
    this.userId = props.userId;
    this.used = false;
    this.secretCode = props.secretCode;
  }
}

export interface IEmailVerificationProps {
  username: string;
  email: string;
  secretCode: string;
  userId: string;
}
