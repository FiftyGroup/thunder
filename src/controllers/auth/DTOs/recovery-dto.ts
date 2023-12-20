import { IsString } from "class-validator";
export class RecoveryDTO {
  @IsString()
  email: string;
}
