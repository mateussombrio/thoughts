const { DataTypes } = require("sequelize");

const db = require("../db/conn");
const Post = require("./Post");

const User = db.define("User", {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  lastname: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  photo: {
    type: DataTypes.BLOB,
    allowNull: true
  },
  username: {
    type: DataTypes.STRING,
    allowNull: false
  }
});

module.exports = User;
