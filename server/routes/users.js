var express = require("express");
var router = express.Router();
const userController = require("../controllers/userController");

router.post("/register", userController.registerUser);
router.post("/update/:id", userController.updateUser);

router.post("/login", userController.loginUser);

router.get("/logout", userController.logoutUser);

module.exports = router;
