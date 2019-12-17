import express from "express";

const app = express();

app.get("/", (req, res) => {
  res.send("Hello Node");
});

app.get("/gh", (req, res) => {
  res.send("This page is GH page!");
});

app.listen(3000, () => console.log("server start"));
