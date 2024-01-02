import {
  Table,
  Column,
  Model,
  DataType,
  ForeignKey,
  BelongsTo,
  CreatedAt,
} from "sequelize-typescript";
import { UserModel } from "./UserModel";
import { DataTypes } from "sequelize";

@Table
export class EmailVerificationModel extends Model {
  @Column({
    type: DataType.STRING,
    primaryKey: true,
    allowNull: false,
  })
  id: string;

  @Column({
    type: DataTypes.STRING,
    allowNull: false,
  })
  username: string;

  @Column({
    type: DataTypes.STRING,
    allowNull: false,
  })
  email: string;

  @Column({
    type: DataTypes.STRING,
    allowNull: false,
  })
  secretCode: string;

  @Column({
    type: DataTypes.BOOLEAN,
    defaultValue: false,
  })
  used: boolean;

  @CreatedAt
  createdAt: Date;

  @Column({
    type: DataTypes.DATE,
    allowNull: false,
  })
  expiresAt: Date;

  @ForeignKey(() => UserModel)
  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  userId: string;

  @BelongsTo(() => UserModel)
  user: UserModel;
}
