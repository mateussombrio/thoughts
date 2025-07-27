const { Post, User } = require("../model");

module.exports = class PostController {
  static async createPost(req, res) {
    const userId = req.session.userId

    const {description} = req.body

    await Post.create({
      description: description,
      userId: userId
    });
  }

  static async showPost(req, res) {
    const post = await Post.findAll({
      include: {
        model: User,
        attributes: ["name", "lastname"],
      },
      order: [['createdAt', 'DESC']]
    });

    const plainPost = post.map((post) => post.get({ plain: true }));

    req.session.save( () =>{
      res.render("home", {post:plainPost});
    })
  }
};
