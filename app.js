const express = require("express");
const exphb = require("express-handlebars");
const conn = require("./db/conn");
const Post = require("./model/Post");
const postRoutes = require("./routes/postRoutes");
const loginRoutes = require("./routes/loginRoutes");
const userRoutes = require("./routes/userRoutes");
const app = express();

app.engine("handlebars", exphb.engine());
app.set("view engine", "handlebars");

app.use(express.urlencoded({ extended: true }));

app.use(express.static("public"));

app.use("/", postRoutes);

app.use("/login", loginRoutes);

app.use("/user", userRoutes);

conn
  .sync()
  .then(() => {
    app.listen(3000);
  })
  .catch((err) => console.log(err));
