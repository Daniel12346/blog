const Post = require("../models/post");

const userServices = {
  findAllPosts: async ({ desc = true }) =>
    Post.find({})
      .sort(desc ? "-creationDate" : "creationDate")
      .exec(),
  savePost: async post => post.save(),
  updatePost: async (id, update) => Post.findByIdAndUpdate(id, update)
};

module.exports = userServices;
