"use strict";

const express = require("express");
const app = express();

const notFoundHandler = require("./handlers/404");
const errorHandler = require("./handlers/500");

function start(port) {
  app.listen(port, () => console.log(`Running on Port ${port}`));
}

app.get("/", (req, res) => {
  res.send("The server is working");
});

app.post("/badrequest", (req, res) => {
  let number = 12;
  number.forEach((x) => console.log(x));
  res.send("bad request");
});

app.get("/data", (req, res) => {
  res.json({
    id:962,
    name: "ibrahem alomari",
    email: "ibrahem.omari96@gmail.com",
  });
});

app.use("*", notFoundHandler);
app.use(errorHandler);

module.exports = {
  app: app,
  start: start,
};
