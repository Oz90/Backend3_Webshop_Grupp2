const express = require('express');

const router = express.Router();
const productController = require('../controllers/productController');
const authAdmin = require('../middleware/authAdmin');


router
  .get('/', productController.getAllProducts)
  .post('/add', authAdmin, productController.addProduct)

router
  .get('/:id', productController.getSingleProduct)
  .post('/:id', authAdmin, productController.editProduct)
  .delete('/:id', authAdmin, productController.deleteSingleProduct);

module.exports = router;
