import { User } from '@/modules/users/entity';
import { Table, Column, Model, DataType } from 'sequelize-typescript';

@Table({
  tableName: 'posts',
  timestamps: true,
})
export default class Post extends Model<Post> {
  @Column({
    type: DataType.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  })
  id: number;

  @Column({
    type: DataType.TEXT('tiny'),
  })
  title: string;

  @Column({
    type: DataType.TEXT,
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
    // 추후 Ref추가
  })
  like_id: string;
}
