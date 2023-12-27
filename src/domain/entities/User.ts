import { randomUUID } from "crypto";
import { EmailVerification } from "./EmailVerification";
import { Recovery } from "./Recovery";
import { Session } from "./Session";

export class User {
    public readonly id: string;
    public readonly username: string;
    public readonly roles: string[];
    public readonly password: string;
    public readonly fullName: string;
    public readonly email: string;
    public readonly isVerified: boolean;
    public readonly createdAt: string;
    public readonly emailVerification: EmailVerification[];
    public readonly sessions: Session[];
    public readonly recovery: Recovery[];

    constructor(props: IUserProps) {
        this.id = randomUUID();
        this.username = props.username;
        this.roles = ["user"]
        this.password = props.password;
        this.fullName = props.fullName;
        this.email = props.email;
        this.isVerified = false;
        this.createdAt = new Date().toISOString();
        this.recovery = []
        this.sessions = []
        this.emailVerification= []
    }
}

export interface IUserProps {
    username: string;
    password: string;
    fullName: string;
    email: string;
}
