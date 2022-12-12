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

  export const getSubjects: THandler = (_, reply) => {
    app.pg.query("SELECT * FROM subject ORDER BY id ASC", (error, results) => {
      if (error) {
        throw error;
      }
      reply.status(200).send(results.rows);
    });
  };
  //   export const getProjects: THandler = (_, reply) => {
  //     const dbQuery =
  //       'SELECT id, nameofproject FROM "Projects"';
  //     app.pg.query(dbQuery, (err: any, result: any) => {
  //       if (err) throw Error();
  //       reply.send(result.rows);
  //     });
  //   };

  //   export const postProject: THandler = (request, reply) => {
  //     const { nameofproject } = request.body as any;
  //     const dbQuery =
  //       'INSERT INTO "Projects" (nameofproject) VALUES ($1)';
  //     app.pg.query(dbQuery, [nameofproject], (err: any) => {
  //       if (err) throw Error();

  //       reply.send({ nameofproject });
  //     });
  //   };

  //   export const deleteProject: THandler = (request, reply) => {
  //     const { id } = request.params as any;
  //     const dbQuery =
  //       'DELETE FROM "Projects" WHERE id=($1)';
  //     app.pg.query(dbQuery, [id], (err: any) => {
  //       if (err) throw Error();

  //       reply.send(`Project with ID: ${id} deleted successfully.`);
  //     });
  //   };
}

export default Controllers;
