import { Request, Response } from "express-serve-static-core";
import { InputUser } from "../types/request-body";
import { CreateUserQueryParams } from "../types/query-params";
import { OutputUser } from "../types/response";
import { log } from "console";

export const getUsers = (req: Request, res: Response) => {
  res.send([]);
};

export const getUser = (req: Request, res: Response<OutputUser>) => {
  console.log(`Fetching user ${req.params.id}`);
  res.send({ id: 1, name: "test", email: "test" });
};

export const createUser = (
  req: Request<{}, {}, InputUser, CreateUserQueryParams>,
  res: Response<OutputUser>
) => {
  console.log(req.some_string); // from extended request index.d.ts
  //console.log(req.session);  3rd party module with types integration
  res.send({
    id: 1,
    name: req.body.name,
    email: req.body.email,
  });
  // 1st param to req object is request params
  // 3rd param to req object is request body
  // 4th param to req object is query params
  // 1st param to res object is response body
};
