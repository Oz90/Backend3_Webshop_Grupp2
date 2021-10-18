const express = require('express');

const router = express.Router();
const cartController = require('../controllers/cartController');

router.post('/add/:id', cartController.addToCart);
router.post('/update/:id', cartController.deleteCartItem);
router.post('/delete', cartController.deleteCart);

module.exports = router;
