const db = require("../db/conn");
const User = require("./User");
const Post = require("./Post");

// Associações
User.hasMany(Post, {
  foreignKey: "userId",
  onDelete: "CASCADE",
});
Post.belongsTo(User, {
  foreignKey: "userId",
});

// Exporta tudo junto
module.exports = {
  db,
  User,
  Post,
};
