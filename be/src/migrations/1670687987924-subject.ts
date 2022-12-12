import { MigrationInterface, QueryRunner } from "typeorm";

export class subject1670687987924 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
    CREATE TABLE subject (
        id SERIAL PRIMARY KEY,
        name VARCHAR(128) NOT NULL,
        start_time TIME NOT NULL,
        end_time TIME NOT NULL
    );
        `);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
        DROP TABLE "subject"
        `);
  }
}
