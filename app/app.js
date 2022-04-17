"use strict";

//모듈
const express = require("express");
const bodyParser = require("body-parser");
const app = express();

//라우팅
const home = require("./src/routes/home");


//앱 세팅
app.set("views","./src/views");
app.set("view engine", "ejs");
//__dirname : app.js가 있는 디렉토리 반환
//express.static 정적경로로 추가하겠다
app.use(express.static(`${__dirname}/src/public`));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended : true }));

app.use("/", home); //use -> 미들웨어를 등록시켜주는 메서드

module.exports = app;