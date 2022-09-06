import { Post } from '@/modules/posts/entity';
import { User } from '@/modules/users/entity';
import { Table, Column, Model, DataType } from 'sequelize-typescript';

@Table({
  tableName: 'photos',
})
export default class Photo extends Model<Photo> {
  @Column({
    type: DataType.INTEGER,
    primaryKey: true,
    allowNull: false,
    autoIncrement: true,
  })
  id: number;

  @Column({
    type: DataType.TEXT,
    allowNull: false,
  })
  url: string;

  @Column({
    type: DataType.UUIDV4,
    references: {
      model: User,
      key: 'id',
    },
  })
  user_id: string;

  @Column({
    type: DataType.INTEGER,
    references: {
      model: Post,
      key: 'id',
    },
  })
  post_id: number;
}
