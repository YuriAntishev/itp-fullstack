import fastify, { FastifyInstance } from "fastify";
import cors from "@fastify/cors";
// import fastifyTypeormPlugin from "fastify-typeorm-plugin";
// import { Student } from "./entities/Student";
// import { Subject } from "./entities/Subject";
// import { Member } from "./entities/Member";
import fastifyPostgres from "@fastify/postgres";
import RoutesProvider from "./routes/routes";

export const app: FastifyInstance = fastify({ logger: true });
const conString = "postgres://postgres:secret@localhost/postgres";

app.register(cors, {
  /* put your options here */
});

// app.register(fastifyTypeormPlugin, {
//   type: "postgres",
//   host: "localhost",
//   port: 5432,
//   username: "postgres",
//   password: "secret",
//   database: "postgres",
//   entities: ["src/entities/**/*{.ts,.js}"],
//   migrations: ["dist/migrations/**/*{.ts,.js}"],
//   // synchronize: true,
//   // logging: false,
//   // subscribers:
//   //   process.env.NODE_ENV === "production"
//   //     ? ["build/subscribers/**/*.js"]
//   //     : ["src/subscribers/**/*.ts"],
//   // ssl: process.env.NODE_ENV === "production" ? true : false,
//   // extra:
//   //   process.env.NODE_ENV === "production"
//   //     ? {
//   //         ssl: {
//   //           rejectUnauthorized: false,
//   //         },
//   //       }
//   //     : {},
  
// });

// app.get("/students", async function (req, reply) {
//   const students = await this.orm
//     .getRepository(Student)
//     .createQueryBuilder("student")
//     .getMany();

//   return students;
// });

// app.get("/subjects", async function (req, reply) {
//   const subjects = await this.orm
//     .getRepository(Subject)
//     .createQueryBuilder("subject")
//     .getMany();

//   return subjects;
// });

// app.get("/members", async function (req, reply) {
//   const members = await this.orm.query(`
//   select 
//   student.fullname, 
//   member.role, 
//   subject.name, 
//   subject.start_time, 
//   subject.end_time
//   from student
//   left join member on member.student_id = student.id
//   left join subject on member.subject_id = subject.id
//   WHERE student.id = 1
//   order by 
//   subject.name, 
//   member.role desc, 
//   student.fullname, 
//   subject.start_time, 
//   subject.end_time;`);

//   return members;
// });

app.register(fastifyPostgres, {
  connectionString: conString,
});

app.get("/", async (request, reply) => {
  return { hello: "world" };
});

app.register(RoutesProvider);

app.listen({ port: 8000 }, (err, address) => {
  if (err) {
    app.log.error(err);
    process.exit(1);
  }
  app.log.info(`App running on port ${address}.`);
});
