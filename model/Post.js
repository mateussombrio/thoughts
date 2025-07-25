const { DataTypes } = require("sequelize");

const db = require("../db/conn");

const User = require("./User");

const Post = db.define("Post", {
  description: {
    type: DataTypes.STRING,
    allowNull: false,
  }
});

module.exports = Post;
