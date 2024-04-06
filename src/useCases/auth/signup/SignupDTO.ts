import { IsEmail, IsString, Length } from "class-validator";
export default class SignupDTO {
  @IsString()
  @Length(5, 20)
  fullName: string;

  @IsString()
  @Length(5, 15)
  username: string;

  @IsString()
  @IsEmail()
  email: string;

  @IsString()
  @Length(8, 20)
  password: string;
}
