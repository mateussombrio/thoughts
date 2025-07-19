const { where } = require("sequelize");

const { User } = require("../model");

module.exports = class LoginController {
  static renderLogin(req, res) {
    res.render("login", {hideNavbar: true});
  }

  static async authenticateUser(req, res) {
    const nameTyped = req.body.username;

    const user = await User.findOne({ where: { name: nameTyped } });

    if (nameTyped == user.username) {
      res.render("home");
    } else {
      alert("Erro no login");
    }
  }
};
