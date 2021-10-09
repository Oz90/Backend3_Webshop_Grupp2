const User = require("./../models/UserModel");

exports.createUser = async (req, res) => {
  const fullAddress = {
    address: req.body.address,
    city: req.body.city,
    zipcode: req.body.zipcode
  };

  const newUser = {
    fullName: req.body.fullName,
    displayName: req.body.displayName,
    email: req.body.email,
    password: req.body.password,
    phoneNumber: req.body.phoneNumber,
    fullAddress: fullAddress
  };

  //   const user = new User(newUser);
  //   user.save().then(user => res.json(user));
  const user = await new User(newUser);
  user.save();
  res.status(200).json(user);
};
