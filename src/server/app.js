import getLength from "./bot.js";
import express from "express";
const app = express();
const port = 3300;

app.use(function (req, res, next) {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");
  res.setHeader("Access-Control-Allow-Credentials", true);
  next();
});

app.use(express.static("public"));

app.get("/getLength", async (req, res) => {
  const output = await getLength(req.query.url);
  res.send(output);
});

app.get("/", async (req, res) => {
  res.send("Welcome to app");
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

export default app;
