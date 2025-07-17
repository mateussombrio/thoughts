const { where } = require("sequelize");

const { User } = require("../model");

module.exports = class LoginController {
  static async authenticateUser(req, res) {
    const nameTyped = req.body.username

    const user = await User.findOne({where: {name: nameTyped}})

    if(nameTyped == user){
        res.render("home")
    }else{
        
    }

  }
};
