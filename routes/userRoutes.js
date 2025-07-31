const express = require("express")
const UserController = require("../controllers/UserController")
const upload = require("../middlewares/upload")

const router = express.Router()

router.get("/", UserController.showUserProfile)

router.post("/", UserController.createUser)

router.post("/user", upload.single("uploadImage"), UserController.createUserImage)

module.exports = router