import { IsString, Length } from "class-validator";
export class LoginDTO {
  @IsString()
  @Length(3, 15)
  username: string;
  @IsString()
  @Length(8, 20)
  password: string;
}
