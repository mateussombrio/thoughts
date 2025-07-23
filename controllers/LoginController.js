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

      if (!user) {
        return res.render("login", { error: "Usuário não encontrado" });
      }

      if (user.password !== passwordTyped) {
        return res.render("login", { error: "Senha incorreta" });
      }

      req.session.userId = user.id;
      req.session.username = user.name;

      res.redirect("/")
    } catch (err) {
      console.error("Erro ao autenticar o usuário", err);
    }
  }
};
