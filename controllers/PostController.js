const Post = require("../model/Post");

module.exports = class PostController {
  static showPost(req, res) {
    res.render("home");
  }
};
