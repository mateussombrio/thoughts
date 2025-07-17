const express = require("express");
const Post = require("../model/Post");
const PostController = require("../controllers/PostController");

const router = express.Router();

router.get("/", PostController.renderPost);

router.get("/", PostController.showPost);

module.exports = router;
