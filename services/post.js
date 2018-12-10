const Post = require("../models/post");

const userServices = {
  findAllPosts: async ({ desc = true }) =>
    Post.find({})
      .sort(desc ? "-creationDate" : "creationDate")
      .exec(),
  savePost: async post => post.save()
};

module.exports = userServices;
