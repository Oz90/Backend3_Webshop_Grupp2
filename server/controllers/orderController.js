const User = require('../models/UserModel');
const Order = require('../models/OrderModel');
const checkUser = require('../utils/checkUser');


exports.addOrder = async (req, res) => {
  try {
    const id = checkUser(req.cookies.token)
    const user = await User.findById(id);
    const products = user.cart;
    const newOrder = await new Order({
      user: id,
      email: user.email,
      products,
    });
    console.log(products);
    newOrder.save();
    res.send(newOrder);
  } catch (err) {
    console.error(err);
    res.status(500).send(err);
  }
};

exports.getSingleOrder = async (req, res) => {
  try {
    const orderId = req.params.id;
    const order = await Order.findById(orderId);
    res.status(200).json(order);
  } catch (err) {
    console.error(err);
    res.status(500).send(err);
  }
};

exports.getAllUserOrders = async (req, res) => {
  try {
    const userId = checkUser(req.cookies.token)
    const orders = await Order.find({ user: userId });
    res.status(200).json(orders);
  } catch (err) {
    console.error(err);
    res.status(500).send(err);
  }
};

exports.toggleIsShipped = async (req, res) => {
  try {
    const orderId = req.params.id;
    const order = await Order.findById(orderId);
    await Order.findByIdAndUpdate(orderId, {
      isShipped: !order.isShipped,
    });
    res.status(200).json(order.isShipped);
  } catch (err) {
    console.error(err);
    res.status(500).send(err);
  }
};

exports.getAllOrders = async (req, res) => {
  try {
    const allOrders = await Order.find({});
    res.status(200).json(allOrders);
  } catch (err) {
    console.error(err);
    res.status(500).send(err);
  }
};
