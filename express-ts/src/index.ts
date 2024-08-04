import { NextFunction, Request, Response } from "express-serve-static-core";
import { createApp } from "./createApp";

const app = createApp();
const port = 3000;

app.get("/", (req: Request, res: Response, next: NextFunction) => {
  res.send("Hello World! Explore more at http://localhost:3000/api/users");
});

app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});
