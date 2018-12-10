const express = require("express");
const router = express.Router();
const postController = require("../controllers/posts");
const homeController = require("../controllers/home");

//TODO: add search and sort options to postController
router.get("/", homeController.displayPosts);

router.get("/:id", postController.displayPost);

router.delete("/:id", postController.deletePost);

//TODO:
//router.patch("/:id", postController.deletePost)

module.exports = router;
