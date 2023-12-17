import { IsEmail, IsString, Length } from 'class-validator';
export class CreateUserDTO {
  @IsString()
  @IsEmail()
  email: string;
  @IsString()
  @Length(8, 30)
  password: string;
}
