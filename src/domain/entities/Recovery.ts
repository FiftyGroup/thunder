import { randomUUID } from "crypto";
import { User } from "./User";

export class Recovery {
    public readonly id: string;
    public readonly userId: string;
    public readonly user: User;
    public readonly secretCode: string;
    public readonly used: boolean;
    public readonly createdAt: string;
    public readonly expiresAt: string;

    constructor(props: IRecoveryProps) {
        this.id = randomUUID();
        this.userId = props.userId;
        this.secretCode = props.secretCode;
        this.used = false;
        this.createdAt = new Date().toISOString();
        this.expiresAt = new Date(Date.now() + 24 * 60 * 60 * 1000).toISOString();
    }
}

export interface IRecoveryProps {
    username: string;
    userId: string;
    secretCode: string;
    email:string
}
