const Post = require("../models/post");
const postServices = require("../services/post");
const { wrap } = require("../utils/utils");

const postController = {
  displayPost: wrap(async (req, res, next) => {
    const { id } = req.params;
    const post = await Post.findById(id);
    res.render("post.hbs", {
      post: post,
      formattedTime: post.formattedCreationDate(),
      urlToPost: post.urlToPost()
    });
  }),
  deletePost: wrap(async (req, res, next) => {
    const { id } = req.params;
    const post = await Post.findById(id);
    await Post.findByIdAndRemove(id);
    res.redirect("/posts");
  }),

  displayPostToEdit: wrap(async (req, res, next) => {
    const { id } = req.params;
    const post = await Post.findById(id);
    res.render("post.hbs", {
      post: post,
      formattedTime: post.formattedCreationDate(),
      urlToPost: post.urlToPost(),
      edit: true
    });
  }),
  displayEditedPost: wrap(async (req, res, next) => {
    const { updatedContent } = req.body;
    const { id } = req.params;
    const post = await postServices.updatePost(id, { content: updatedContent });
    res.redirect(post.urlToPost());
  })
};

module.exports = postController;
