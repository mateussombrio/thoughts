const { where } = require("sequelize");

const { User } = require("../model");

module.exports = class LoginController {
  static renderLogin(req, res) {
    res.render("login", { hideNavbar: true });
  }

  static async authenticateUser(req, res) {
    const usernameTyped = req.body.username;
    const passwordTyped = req.body.password;

    try {
      const user = await User.findOne({ where: { username: usernameTyped } });
      const password = await User.findOne({where: {password: passwordTyped}})

      if (usernameTyped === user.username && passwordTyped === password.password) {
        res.render("home");
      }
    } catch (err) {
      console.log(err);
    }
  }
};
