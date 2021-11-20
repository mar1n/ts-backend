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
    const response = await request(app).post("/api/signup");
    expect(response.status).toEqual(200);
    expect(response.body.data).toEqual('you hit signup endpoint');
  })
  test("check express-validator, Is not empty", async () => {
    const response = await request(app).post("/api/signup").send({name: "Szymon", email: "cykcykacz@gmail.com", password:"1234567"});
    expect(response.status).toEqual(200);
  })
  test("check express-validator, One field is empty", async () => {
    const response = await request(app).post("/api/signup").send({name: "", email: "cykcykacz@gmail.com", password:"1234567"});
    expect(response.status).toEqual(422);
  })
})
