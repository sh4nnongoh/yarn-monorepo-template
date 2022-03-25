import request from "supertest";
import { server } from "../server";
describe("Launch Server", () => {
  afterEach(() => {
    server.close();
  });
  it("responds with a Welcome message", () => request(server)
    .get("/")
    .then((res) => {
      expect(res.status).toBe(200);
      expect(res.text).toBe("Typescript with Express");
    }));
});
