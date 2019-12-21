import express from "express";
// import dotenv from "dotenv";

const app = express();

// dotenv.config();

// 1. 확장자를 .pug로 검색한다.
// 2. "views" 폴더를 default 경로로 자동 인식 한다.

app.set("view engine", "pug");

app.get("/", (req, res) => {
  res.render("home");
});

app.get("/post", (req, res) => {
  res.render("post");
});

app.listen(3000, () => console.log("server start"));
