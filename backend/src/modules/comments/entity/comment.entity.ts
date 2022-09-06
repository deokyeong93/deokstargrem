import { Post } from '@/modules/posts/entity';
import { User } from '@/modules/users/entity';
import { Table, Column, Model, DataType } from 'sequelize-typescript';

@Table({
  tableName: 'comments',
  timestamps: true,
})
export default class Comment extends Model<Comment> {
  @Column({
    type: DataType.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
  })
  id: string;

  @Column({
    type: DataType.TEXT,
    allowNull: false,
  })
  content: string;

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
