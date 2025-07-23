const { where } = require("sequelize");

const { User } = require("../model");

module.exports = class UserController {
  static async createUser(req, res) {
    const user = {
      name: req.body.name,
      lastname: req.body.lastname,
      email: req.body.email,
      username: req.body.username,
      password: req.body.password,
    };

    if (!user){
      await User.create(user);
      res.render("home");
    }
  }
};
