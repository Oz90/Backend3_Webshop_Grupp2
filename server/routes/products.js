const express = require('express');

const router = express.Router();
const productController = require('../controllers/productController');

router
  .get('/', productController.getAllProducts);

router
  .get('/:id', productController.getSingleProduct)
  .post('/:id', productController.editProduct)

module.exports = router;
