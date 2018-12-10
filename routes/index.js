var express = require("express");
var router = express.Router();
const { wrap } = require("../utils/utils.js");

const homeRouter = require("./home");
const postsRouter = require("./posts");
//const postsRouter = require("./posts");
/* GET home page. */
module.exports.routeAll = app => {
  app.use("/", homeRouter);
  app.use("/posts", postsRouter);
  // app.use("/posts", postsRouter);
};
