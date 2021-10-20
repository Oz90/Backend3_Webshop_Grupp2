const jwt = require('jsonwebtoken');
const User = require('../models/UserModel')

const checkUser = (token) => {
  console.log('Check user function');
  if (token) {
    const decodedUser = jwt.decode(token)
    id = decodedUser.user
    return id;
  
  } else {
    console.log('fel!');  
    return null;
  }
};

module.exports = checkUser;