import { MigrationInterface, QueryRunner } from "typeorm";

export class student1670687840865 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
        CREATE TABLE student (
            id SERIAL PRIMARY KEY,
            fullname VARCHAR(128),
            date_of_birth date
        );
        `);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
        DROP TABLE "student"
        `);
  }
}
