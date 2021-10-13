const express = require("express");
const router = express.Router();
const orderController = require("../controllers/orderController");

router
  .get("/", orderController.getAllOrders)
  .post("/", orderController.addOrder)

router
  .get("/:id", orderController.getSingleOrder)

module.exports = router;