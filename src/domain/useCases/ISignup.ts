export interface ISignup {
  execute(data: {
    username: string;
    password: string;
    email: string;
    fullName: string;
  }): Promise<void>;
}
