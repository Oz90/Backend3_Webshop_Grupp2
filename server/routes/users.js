const express = require('express');

const router = express.Router();
const userController = require('../controllers/userController');

const authUser = require('../middleware/authUser');

router.post('/register', userController.registerUser);
router.post('/update', userController.updateUser);
router.post('/login', userController.loginUser);
router.get('/logout', userController.logoutUser);
router.get('/loggedinuser', userController.loggedInUser);
router.get('/loggedinadmin', userController.loggedInAdmin);
router.get('/', userController.getUser);

module.exports = router;
