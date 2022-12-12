import { MigrationInterface, QueryRunner } from "typeorm";

export class member1670688071506 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
        CREATE TABLE member (
            student_id INTEGER references student(id) on delete CASCADE,
            subject_id INTEGER references subject(id) on delete CASCADE,
            role INTEGER,
            primary key (student_id, subject_id)
        );
            `);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
            DROP TABLE "member"
            `);
  }
}
