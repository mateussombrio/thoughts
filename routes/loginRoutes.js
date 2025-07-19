const express = require("express");
const LoginController = require("../controllers/LoginController");

const router = express.Router();

router.get("/", LoginController.renderLogin);

router.post("/", LoginController.authenticateUser)


module.exports = router;
