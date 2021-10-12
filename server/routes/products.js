const express = require("express");
const router = express.Router();
const productController = require("../controllers/productController");
const authAdmin = require("../middleware/authAdmin")

router
  .get("/", productController.getAllProducts)
  .post("/", authAdmin, productController.addProduct);

router
  .get("/:id", productController.getSingleProduct)
  .delete("/:id", authAdmin, productController.deleteSingleProduct);

module.exports = router;
