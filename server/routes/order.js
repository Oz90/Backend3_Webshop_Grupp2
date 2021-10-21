const express = require('express');

const router = express.Router();
const orderController = require('../controllers/orderController');

router
  .get('/user', orderController.getAllUserOrders)
  .get('/:id', orderController.getSingleOrder)
  .post('/:id', orderController.toggleIsShipped)
  .post('/', orderController.addOrder)
  .get('/', orderController.getAllOrders);

module.exports = router;
