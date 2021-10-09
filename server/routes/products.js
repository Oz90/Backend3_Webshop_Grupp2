var express = require("express");
var router = express.Router();
const productController = require("../controllers/productController");

router
  .get("/", productController.getAllProducts)
  .post("/", productController.addProduct);

router.get("/:id", productController.getSingleProduct);

module.exports = router;
