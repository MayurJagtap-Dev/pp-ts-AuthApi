import { Express } from "express-serve-static-core";
import request from "supertest";
import { createApp } from "../createApp";

describe("/api/users", () => {
  let app: Express;

  beforeAll(() => {
    app = createApp();
  });
  it("should return anempty array of users", async () => {
    const response = await request(app).get("/api/users");
    expect(response.statusCode).toBe(200);
    expect(response.body).toEqual([]);
  });
});
