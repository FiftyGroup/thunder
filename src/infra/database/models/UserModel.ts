import {
  Table,
  Column,
  Model,
  DataType,
  PrimaryKey,
  AutoIncrement,
  CreatedAt,
  UpdatedAt,
  DeletedAt,
  HasMany,
} from "sequelize-typescript";
import { EmailVerificationModel } from "./EmailVerificationModel";
import { SessionModel } from "./SessionModel";
import { RecoveryModel } from "./RecoveryModel";

@Table
export class UserModel extends Model {
  @Column({
    type: DataType.STRING,
    primaryKey: true,
    allowNull: false,
  })
  id: string;

  @Column({
    type: DataType.STRING,
    unique: true,
    allowNull: false,
  })
  username: string;

  @Column({
    type: DataType.ARRAY(DataType.STRING),
    allowNull: false,
  })
  roles: string[];

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  password: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  fullName: string;

  @Column({
    type: DataType.STRING,
    unique: true,
    allowNull: false,
  })
  email: string;

  @Column({
    type: DataType.BOOLEAN,
    defaultValue: false,
  })
  isVerified: boolean;

  @CreatedAt
  createdAt: Date;

  @UpdatedAt
  updatedAt: Date;

  @DeletedAt
  deletedAt: Date | null;

  @HasMany(() => EmailVerificationModel)
  emailVerification: EmailVerificationModel[];

  @HasMany(() => SessionModel)
  sessions: SessionModel[];

  @HasMany(() => RecoveryModel)
  recovery: RecoveryModel[];
}
