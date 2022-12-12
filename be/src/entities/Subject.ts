import {
  Column,
  Entity,
  PrimaryGeneratedColumn,
  BeforeUpdate,
  BeforeInsert,
  OneToMany,
  OneToOne,
} from "typeorm";
import { Member } from "./Member";

@Entity({ name: "subject" })
export class Subject {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  name!: string;

  @Column("time", { name: "start_time" })
  start_time!: Date;

  @Column("time", { name: "end_time" })
  end_time!: Date;

  @OneToMany("Member", "subject")
  members: Member[];
}
