import { randomUUID } from "crypto";

export class Session {
    public readonly id: string;
    public readonly username: string;
    public readonly refreshToken: string;
    public readonly userAgent: string;
    public readonly ip: string;
    public readonly blocked: boolean;
    public readonly expiresAt: string;
    public readonly createdAt: string;
    public readonly userId: string;

    constructor(props: ISessionProps) {
        this.id = randomUUID();
        this.username = props.username;
        this.refreshToken = props.refreshToken;
        this.userAgent = props.userAgent;
        this.ip = props.ip;
        this.blocked = false;
        this.expiresAt = new Date(Date.now() + 30 * 24 * 60 * 60 * 1000).toISOString();
        this.createdAt = new Date().toISOString();
        this.userId = props.userId;
    }
}

export interface ISessionProps {
    username: string;
    refreshToken: string;
    userAgent: string;
    ip: string;
    userId: string;
}
