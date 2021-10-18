const express = require('express');

const router = express.Router();
const productController = require('../controllers/productController');
const authAdmin = require('../middleware/authAdmin');

router
  .post('/add', authAdmin, productController.addProduct);

router
  .post('/edit/:id', authAdmin, productController.editProduct);

router
  .delete('/:id', authAdmin, productController.deleteSingleProduct);

module.exports = router;
