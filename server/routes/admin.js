const express = require("express");
const router = express.Router();
const adminController = require("../controllers/adminController");
const authAdmin = require("../middleware/authAdmin")

router
  .post("/add", authAdmin, adminController.addProduct);

router
  .post("/edit/:id", authAdmin, adminController.editProduct);

router
  .delete("/:id", authAdmin, adminController.deleteSingleProduct);

module.exports = router;
