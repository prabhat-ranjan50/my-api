const express = require("express");
const app = express();

let level = 100;

app.get("/", (req, res) => {
  res.send("Hello, world!");
});

app.get("/level/:lvl", (req, res) => {
  level = req.params.lvl;
  res.status(200).send({ updatedWaterLvl: Number(level) });
});

app.get("/level", (req, res) => {
  res.send({ level });
});

app.listen(3000, () => {
  console.log("server listening on port 3000.");
});

module.exports = app;