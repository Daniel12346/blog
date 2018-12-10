const Post = require("../models/post");
const postServices = require("../services/post");
const { wrap } = require("../utils/utils");

//Todo: add validation
const homeController = {
  createNewPost: wrap(async (req, res, next) => {
    const { title, content } = req.body;
    const imgUrl = "/" + req.file.path;
    const creationDate = new Date();
    if (!imgUrl) {
      //TODO: add error handler
      return res.status(422).send("Image could not be uploaded");
    }
    const newPost = new Post({ imgUrl, title, content, creationDate });
    await postServices.savePost(newPost);
    res.redirect("/");
  }),
  displayPosts: wrap(async (req, res, next) => {
    const posts = await postServices.findAllPosts({});
    res.render("index.hbs", { posts });
  }),
  deletePost: wrap(async (req, res, next) => {
    await postServices.delete(req.params.id);
    res.redirect("/");
  })
  /*createAndSave: async item => {
    let newPost = new Post({ item, id });
    await newPost.save();
  },
  findAll: async () => await Post.find({}).exec(),
  // {item} is the same as {item:item}
  find: async item => await Post.find({ item }).exec(),
  delete: async id => await Post.findOneAndRemove({ id }).exec()*/
};

module.exports = homeController;
