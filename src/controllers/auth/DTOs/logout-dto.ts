import { IsJWT } from "class-validator";
export class LogoutDTO {
  @IsJWT()
  refreshToken: string;
}
