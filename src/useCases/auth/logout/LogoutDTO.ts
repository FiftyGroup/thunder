import { IsJWT } from "class-validator";
export default class LogoutDTO {
  @IsJWT()
  refreshToken: string;
}
