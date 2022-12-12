import { FastifyRequest, FastifyReply } from "fastify";
import { app } from "..";

type THandler = (request: FastifyRequest, reply: FastifyReply) => void;

namespace Controllers {
  export const getStudents: THandler = (_, reply) => {
    app.pg.query("SELECT * FROM student ORDER BY id ASC", (error, results) => {
      if (error) {
        throw error;
      }
      reply.status(200).send(results.rows);
    });
  };

  export const getSubjects: THandler = (_, reply) => {
    app.pg.query("SELECT * FROM subject ORDER BY id ASC", (error, results) => {
      if (error) {
        throw error;
      }
      reply.status(200).send(results.rows);
    });
  };

  export const getStudentInfoById: THandler = (request, reply) => {
    const { id } = request.params as any;

    const dbQuery = `select 
    student.fullname, 
    member.role, 
    subject.name, 
    subject.start_time, 
    subject.end_time
    from student
    join member on member.student_id = student.id
    join subject on member.subject_id = subject.id
    WHERE student.id = $1
    order by 
    subject.name, 
    member.role desc, 
    student.fullname, 
    subject.start_time, 
    subject.end_time;`;

    app.pg.query(dbQuery, [id], (err, result) => {
      if (err) throw Error();
      reply.send(result.rows);
    });
  };

  export const deleteStudent: THandler = (request, reply) => {
    const { id } = request.params as any;
    const dbQuery =
      'DELETE FROM student WHERE id=($1)';
    app.pg.query(dbQuery, [id], (err: any) => {
      if (err) throw Error();

      reply.send(`Student with ID: ${id} deleted successfully.`);
    });
  };

  export const deleteSubject: THandler = (request, reply) => {
    const { id } = request.params as any;
    const dbQuery =
      'DELETE FROM subject WHERE id=($1)';
    app.pg.query(dbQuery, [id], (err: any) => {
      if (err) throw Error();

      reply.send(`Subject with ID: ${id} deleted successfully.`);
    });
  };

  export const updateStudent: THandler = (request, reply) => {
    const { id } = request.params as any;
    const { fullname, date_of_birth } = request.body as any;

    const dbQuery = 'UPDATE student SET fullname = $1, date_of_birth = $2 WHERE id = $3';

    app.pg.query(dbQuery, [fullname, date_of_birth, id], (err) => {
      if (err) throw Error();

      reply.send('Student details updated successfully.');
    });
  };

  export const updateSubject: THandler = (request, reply) => {
    const { id } = request.params as any;
    const { name, start_time, end_time } = request.body as any;

    const dbQuery = 'UPDATE subject SET name = $1, start_time = $2, end_time = $3 WHERE id = $4';

    app.pg.query(dbQuery, [name, start_time, end_time, id], (err) => {
      if (err) throw Error();

      reply.send('Subject details updated successfully.');
    });
  };

}

export default Controllers;
