const User = require('../models/UserModel');
const Order = require('../models/OrderModel');


exports.addOrder = async (req, res) => {
  try {
    const id = req.body.userId;
    const user = await User.findById(id);
    const products = user.cart;
    const newOrder = await new Order({
      user: id,
      products
    });
    console.log(products);
    newOrder.save();
    res.send(newOrder);


  } catch (err) {
    console.error(err)
    res.status(500).send(err)
  }

};

exports.getSingleOrder = (req, res) => {

};


exports.getAllOrders = (req, res) => {



};