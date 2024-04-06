import { IsString, Length } from "class-validator";
export class RecoveryPasswordDTO {
  @IsString()
  email: string;
}
