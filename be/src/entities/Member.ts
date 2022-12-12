import { Column, Entity, PrimaryGeneratedColumn, JoinColumn, ManyToOne } from "typeorm";
import { Student } from "./Student";
import { Subject } from "./Subject";

@Entity({ name: "member" })
export class Member {
  @PrimaryGeneratedColumn()
  student_id!: number;

  @PrimaryGeneratedColumn()
  subject_id!: number;

  @Column()
  role!: number;

  @ManyToOne("Student", "members")
  @JoinColumn({ name: 'student_id' })
  student: Student;

  @ManyToOne("Subject", "members")
  @JoinColumn({ name: 'subject_id' })
  subject: Subject;
}
