const Post = require("../models/post");
const postServices = require("../services/post");
const { wrap } = require("../utils/utils");
const { ObjectId } = require("mongoose").Types;

const postController = {
  displayPost: wrap(async (req, res, next) => {
    const { id } = req.params;
    const post = await Post.findById(id);
    res.render("post.hbs", {
      post: post,
      formattedTime: post.formattedCreationDate()
    });
  }),
  deletePost: wrap(async (req, res, next) => {
    const { id } = req.params;
    const post = await Post.findById(id);
    await Post.findByIdAndRemove(id);
    res.redirect("/posts");
  }),
  //responds to patch requests

  displayPostToEdit: wrap(async (req, res, next) => {
    const { id } = req.params;
    const post = await Post.findById(id);
    res.render("post.hbs", {
      post: post,
      formattedTime: post.formattedCreationDate(),
      edit: true
    });
  })
};

module.exports = postController;
