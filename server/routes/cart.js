const express = require('express');

const router = express.Router();
const cartController = require('../controllers/cartController');

router.post('/add/:id', cartController.addToCart);
router.post('/delete/:id', cartController.deleteCartItem);
router.post('/delete', cartController.deleteCart);
router.get('/', cartController.getCart);

module.exports = router;
