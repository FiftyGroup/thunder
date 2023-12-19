import { IsEmail, IsString, Length } from 'class-validator';
export class RegisterDTO {
  @IsString()
  @Length(5, 20)
  fullName: string

  @IsString()
  @Length(5, 15)
  username: string;

  @IsString()
  @IsEmail()
  email: string;

  @IsString()
  @Length(8, 20)
  password: string
}
