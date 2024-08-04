//One of many ways to extend the express module
import * as express from "express-serve-static-core";

declare global {
  namespace Express {
    interface Request {
      some_string: string;
    }
  }
}
