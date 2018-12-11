const express = require("express");
const router = express.Router();
const { wrap } = require("../utils/utils.js");

const homeRouter = require("./home");
const postsRouter = require("./posts");

module.exports.routeAll = app => {
  app.use("/", homeRouter);
  app.use("/posts", postsRouter);
};
