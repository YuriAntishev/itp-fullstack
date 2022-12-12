import { MigrationInterface, QueryRunner } from "typeorm";

export class addStudentData1670690269460 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
      insert INTO student (  
        "id", "fullname", "date_of_birth")  
        VALUES(1, 'Oliver Thomas', '1994-10-22'),
        (2, 'Jessica Smith', '1995-12-13'),
        (3, 'Connor Reece', '1994-04-25'),  
        (4, 'Michael Mason', '1991-04-25'),  
        (5, 'Daniel Oscar', '1991-05-21')
              `);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {}
}
