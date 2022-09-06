import { User } from '@/modules/users/entity';
import { Table, Column, Model, DataType } from 'sequelize-typescript';

@Table
export default class Like extends Model<Like> {
  @Column({
    type: DataType.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
  })
  id: number;

  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  count: number;

  @Column({
    type: DataType.UUIDV4,
    allowNull: false,
    references: {
      model: User,
      key: 'id',
    },
  })
  user_id: string;
}
