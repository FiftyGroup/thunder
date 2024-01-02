export interface ILogin {
  auth(data: { username: string; password: string }): Promise<{
    username: string;
    email: string;
    id: string;
    token: string;
    refreshToken: string;
  }>;
}
