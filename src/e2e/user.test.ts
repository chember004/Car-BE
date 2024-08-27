import request from "supertest";
import { type Express } from "express";
import { createApp } from "../createApp";
import mongoose from "mongoose";

describe("create user and login", () => {
  let app: Express;
  beforeAll(() => {
    mongoose
      .connect("mongodb://127.0.0.1/express_tutorial_test")
      .then(() => console.log("Connected to database"))
      .catch((err) => console.log(`Error: ${err}`));

    app = createApp();
  });

  it("should create the user", async () => {
    const response = await request(app).post("/api/user").send({
      username: "docker",
      email: "docker@gmail.com",
      password: "Docker1234_",
    });
    expect(response.statusCode).toBe(201);
  });

  it("should log the user in and /api/auth/status and return auth user", async () => {
    const response = await request(app)
      .post("/api/auth")
      .send({
        email: "docker@gmail.com",
        password: "Docker1234_",
      })
      .then((res) =>
        request(app)
          .get("/api/auth/status")
          .set("Cookie", res.headers["set-cookie"])
      );
    expect(response.statusCode).toBe(200);
    expect(response.body.username).toBe("docker");
    expect(response.body.email).toBe("docker@gmail.com");
  });

  //   it("should visit /api/auth/status and return authenticate user", async () => {
  //     const response = await request(app).get("/api/auth/status");
  //     expect(response.statusCode).toBe(200);
  //   });

  afterAll(async () => {
    await mongoose.connection.dropDatabase();
    await mongoose.connection.close();
  });
});
