import { IsString, Length } from "class-validator";
export default class RecoveryResetDTO {
  @IsString()
  @Length(8, 20)
  password: string;
}
