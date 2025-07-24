const express = require("express");
const Post = require("../model/Post");
const PostController = require("../controllers/PostController");

const router = express.Router();

router.get("/", PostController.showPost);

router.post("/", PostController.createPost)

module.exports = router;
