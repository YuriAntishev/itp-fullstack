import fastify, { FastifyInstance } from "fastify";
import cors from "@fastify/cors";
import fastifyPostgres from "@fastify/postgres";
import RoutesProvider from "./routes/routes";

export const app: FastifyInstance = fastify({ logger: true });
const conString = "postgres://postgres:secret@localhost/postgres";

app.register(cors, {
  /* put your options here */
});

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
