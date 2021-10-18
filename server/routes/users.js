const express = require('express');

const router = express.Router();
const userController = require('../controllers/userController');

router.post('/register', userController.registerUser);
router.post('/update/:id', userController.updateUser);

router.post('/login', userController.loginUser);

router.get('/logout', userController.logoutUser);

router.get('/loggedinuser', userController.loggedInUser);
router.get('/loggedinadmin', userController.loggedInAdmin);

module.exports = router;
