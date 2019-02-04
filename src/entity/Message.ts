import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Message {
  @PrimaryGeneratedColumn()
  no: number;

  @Column()
  name: string;

  @Column()
  time: string;

  @Column()
  content: string;

  @Column()
  remove: boolean;
}