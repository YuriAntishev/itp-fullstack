import { MigrationInterface, QueryRunner } from "typeorm";

export class addMemberData1670699919408 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
        insert INTO member ("student_id", "subject_id", "role")
            VALUES(1, 1, 0),
            (2, 2, 0),
            (3, 1, 0),  
            (1, 2, 0),  
            (1, 5, 0),  
            (2, 3, 0),
            (3, 3, 0),
            (4, 4, 0),
            (4, 5, 0)`);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {}
}
