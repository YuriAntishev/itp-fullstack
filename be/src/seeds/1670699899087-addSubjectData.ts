import { MigrationInterface, QueryRunner } from "typeorm"

export class addSubjectData1670699899087 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
            insert INTO subject (  
                "id", "name", "start_time", "end_time")  
                VALUES(1, 'Mathematics', '08:00', '10:00'), 
                (2, 'Chemistry', '12:00', '14:00'),
                (3, 'Biology', '10:00', '12:00'),  
                (4, 'English Grammar', '15:00', '17:00'),  
                (5, 'Programming', '12:00', '13:00')
                `);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
    }

}
