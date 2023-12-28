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

app.get("/getLength", async (req, res) => {
  console.log(req.query.url);
  const output = await getLength(req.query.url);
  console.log(output);
  res.send(output);
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

export default app;
