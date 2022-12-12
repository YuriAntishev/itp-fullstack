import {
  Column,
  Entity,
  PrimaryGeneratedColumn,
  OneToMany
} from "typeorm";
import { Member } from "./Member";

@Entity({ name: "student" })
export class Student {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  fullname!: string;

  @Column()
  date_of_birth!: Date;

  @OneToMany("Member", "student")
  members: Member[];
}
