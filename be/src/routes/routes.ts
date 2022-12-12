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
  {
    method: "DELETE",
    url: "/student/:id",
    handler: Controllers.deleteStudent,
  },
  {
    method: "DELETE",
    url: "/subject/:id",
    handler: Controllers.deleteSubject,
  },
  {
    method: "PUT",
    url: "/student/:id",
    handler: Controllers.updateStudent,
  },
  {
    method: "PUT",
    url: "/subject/:id",
    handler: Controllers.updateSubject,
  },
];

const RoutesProvider: TProvider = (fastify, _, done) => {
  allRoutes.forEach((r) => fastify.route(r));
  done();
};

export default RoutesProvider;
