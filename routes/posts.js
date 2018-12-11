const express = require("express");
const router = express.Router();
const postController = require("../controllers/posts");
const homeController = require("../controllers/home");

//TODO: add search and sort options to postController

//displaying a single post
router.get("/:id", postController.displayPost);

//displaying the post with a form and a textarea where edits can be made
router.get("/:id/edit", postController.displayPostToEdit);

//displaying the post with the commited changes
router.post("/:id", postController.displayEditedPost);

//displaying all posts
router.get("/", homeController.displayPosts);

router.delete("/:id", postController.deletePost);

module.exports = router;
