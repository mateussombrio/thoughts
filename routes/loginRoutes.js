const express = require("express");
const LoginController = require("../controllers/LoginController");

const router = express.Router();

router.get("/", LoginController.renderLogin);

router.post("/", LoginController.authenticateUser)

router.get("/logout", LoginController.logout)

module.exports = router;
