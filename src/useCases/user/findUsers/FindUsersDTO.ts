import { IsString, Length } from "class-validator";

export class FindUsersDTO {
  @IsString()
  @Length(5, 20)
  name: string;
}
