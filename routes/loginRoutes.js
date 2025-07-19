const express = require("express");
const LoginController = require("../controllers/LoginController");

const router = express.Router();

router.get("/", LoginController.renderLogin);

router.get("/", LoginController.authenticateUser)


module.exports = router;
