import request from "supertest";
import mongoose from "mongoose";

import app from "../../app";
// beforeEach(async () => {
//   await mongoose.connect("mongodb://localhost:27017/rest-api");
// });

// afterEach(async () => {
//   await mongoose.connection.close();
// });

describe("check server is alive", () => {
  test("status is 200 and body data", async () => {
    const response = await request(app).get("/healthcheck");
    expect(response.status).toEqual(200);

    expect(response.body.data).toEqual("Szymon");
  });
});

describe("authentication", () => {
  test("signUp", async () => {
    const response = await request(app).get("/api/signup");
    expect(response.status).toEqual(200);
    expect(response.body.data).toEqual('you hit signup endpoint');
  })
})
