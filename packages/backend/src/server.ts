import express from "express";
const PORT = 1234;
export const app = express();
app.get("/", (req, res) => {
  res.send("Typescript with Express");
});
export const server = app.listen(PORT, () => {
  console.log(`Typescript with Express (http://localhost:${PORT}/)`);
});
export default server;
