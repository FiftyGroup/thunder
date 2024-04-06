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

@Table({ tableName: "Recovery" })
export class RecoveryModel extends Model {
  @Column({
    type: DataType.STRING,
    primaryKey: true,
    allowNull: false,
  })
  id: string;

  @ForeignKey(() => UserModel)
  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  userId: string;

  @BelongsTo(() => UserModel)
  user: UserModel;

  @Column({
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      len: [150, 150],
    },
  })
  secretCode: string;

  @Column({
    type: DataTypes.BOOLEAN,
    allowNull: false,
  })
  used: boolean;

  @CreatedAt
  createdAt: Date;

  @Column({
    type: DataTypes.DATE,
    allowNull: false,
  })
  expiresAt: Date;
}
