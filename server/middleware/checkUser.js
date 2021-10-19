const jwt = require('jsonwebtoken');
const User = require('../models/UserModel')

// check current user
const checkUser = (req, res, next) => {
  console.log('Här går vi in hoho');
  const token = req.cookies.token;
  if (token) {
    jwt.verify(token, process.env.JWT_SECRET_USER, async (err, decodedToken) => {
      if (err) {
        res.user = null;
        console.log('ingen token');
        next();
      } else {
        const user = await User.findById(decodedToken.user);
        res.user = user;
        console.log('token finns');
        next();
      }
    });
  } else {
    res.user = null;
    console.log('fel!');
    next();
  }
};


module.exports = checkUser;