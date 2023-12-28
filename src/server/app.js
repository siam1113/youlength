import getLength from "./bot.js";
import express from "express";
const app = express();

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

app.get("/welcome", async (req, res) => {
  res.send("Welcome to app");
});

export default app;
