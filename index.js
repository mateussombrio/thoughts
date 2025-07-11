const express = require("express");
const exphb = require("express-handlebars");

const app = express();

app.engine("handlebars", exphb.engine())
app.set('view engine', "handlebars")

app.use(express.urlencoded({extended: true}))

app.use(express.static("public"))

app.listen(3000)