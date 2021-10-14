const express = require("express")
const router = express.Router()
const userController = require("../controllers/userController")

router.post("/add/:id", userController.addToCart)
router.post("/update/:id", userController.deleteCartItem)
router.post("/delete", userController.deleteCart)


module.exports = router
