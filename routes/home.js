const express = require("express");
const router = express.Router();
const homeController = require("../controllers/home");

router.get("/", homeController.displayPosts);
router.post("/", homeController.createNewPost);

module.exports = router;
