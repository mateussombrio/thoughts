const express = require("express");
const session = require("express-session");
const dotenv = require("dotenv");
const exphb = require("express-handlebars");
const conn = require("./db/conn");
const Post = require("./model/Post");
const postRoutes = require("./routes/postRoutes");
const loginRoutes = require("./routes/loginRoutes");
const userRoutes = require("./routes/userRoutes");
const { User } = require("./model");
const app = express();
dotenv.config();
app.engine("handlebars", exphb.engine());
app.set("view engine", "handlebars");

app.use(express.urlencoded({ extended: true }));

app.use(express.static("public"));

app.use(
  session({
    secret: process.env.SECRET,
    resave: false,
    saveUninitialized: false,
    cookie: {
      maxAge: 1000 * 60 * 60,
      httpOnly: true,
    },
  })
);

app.use(async (req, res, next) => {
  if (req.session.userId) {
    try {
      const user = await User.findByPk(req.session.userId, {
        attributes: ["id", "name", "lastname", "username", "photo"],
      });
      // User fica acessível para todas as views
      if (user) {
        res.locals.user = user.get({ plain: true });
      }
    } catch (err) {
      console.error("Erro ao autenticar: ", err);
    }
  }
  next();
});


// Tenho que tirar isso depois
app.get("/", (req, res) =>{
  res.render("home")
})

app.use("/login", loginRoutes);

app.use("/posts", postRoutes);

app.use("/user", userRoutes);
conn
  .sync()
  .then(() => {
    app.listen(3000);
  })
  .catch((err) => console.log(err));
