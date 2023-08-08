import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Article {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column({ default: '' })
  picture: string;

  @Column()
  author: string;

  @Column()
  context: string;

  @Column()
  date: string;

  @Column({ default: '' })
  readBy: string;
}
