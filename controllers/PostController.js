const Post = require("../model/Post");
const User = require("../model/User")

module.exports = class PostController {
  static renderPost(req, res) {
    res.render("home");
  }

  static async createPost(req, res) {
    const post = {
      description: req.body.description,
    };

    await Post.create(post);
  }

  static async showPost(req, res) {
    const post = await Post.findAll({
      include:{
        model: User,
        attributes: ['name', 'lastname']
      }
    });

    res.render("home", {post})
  }
};
