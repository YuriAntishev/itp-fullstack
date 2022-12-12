import { FastifyInstance, RouteOptions } from "fastify";
import Controllers from "../controllers/controllers";

type TProvider = (
  fastify: FastifyInstance,
  options: RouteOptions,
  done: Function
) => void;

const allRoutes: RouteOptions[] = [
  {
    method: "GET",
    url: "/students",
    handler: Controllers.getStudents,
  },
  {
    method: "GET",
    url: "/subjects",
    handler: Controllers.getSubjects,
  },
  {
    method: "GET",
    url: "/student_info/:id",
    handler: Controllers.getStudentInfoById,
  },
];

const RoutesProvider: TProvider = (fastify, _, done) => {
  allRoutes.forEach((r) => fastify.route(r));
  done();
};

export default RoutesProvider;
