const User = require('../models/UserModel');

exports.addToCart = async (req, res, next) => {
  try {
    const productId = req.params.id;
    const { userId } = req.body;
    const { amount } = req.body;

    const user = await User.findById(userId);

    // lägg till det som kommer in direkt
    const newProducts = [
      {
        _id: productId,
        amount,
      },
    ];
    // lägger in allt som inte är samma pr id som kommer in
    for (let i = 0; i < user.cart.length; i++) {
      if (productId != user.cart[i]._id) {
        newProducts.push(user.cart[i]);
      }
    }

    // Lägger till hela newproducts ist för olika mongoose queries
    const newUser = await User.findByIdAndUpdate(
      userId,
      { $set: { cart: newProducts } },
      { new: true },
    );
    res.status(200).json(newUser);
  } catch (err) {
    console.error(err);
    res.status(500).send();
  }
};

exports.deleteCartItem = async (req, res, next) => {
  try {
    const productId = req.params.id;
    const { userId } = req.body;

    const user = await User.findById(userId);

    // lägg till det som kommer in direkt
    const newProducts = [];
    // lägger in allt som inte är samma pr id som kommer in
    for (let i = 0; i < user.cart.length; i++) {
      if (productId != user.cart[i]._id) {
        newProducts.push(user.cart[i]);
      }
    }

    // Lägger till hela newproducts ist för olika mongoose queries
    const newUser = await User.findByIdAndUpdate(
      userId,
      { $set: { cart: newProducts } },
      { new: true },
    );
    res.status(200).json(newUser);
  } catch (err) {
    console.error(err);
    res.status(500).send();
  }
};

exports.deleteCart = async (req, res, next) => {
  try {
    const { userId } = req.body;

    // Lägger till hela newproducts ist för olika mongoose queries
    const newUser = await User.findByIdAndUpdate(
      userId,
      { $set: { cart: [] } },
      { new: true },
    );
    res.status(200).json(newUser);
  } catch (err) {
    console.error(err);
    res.status(500).send();
  }
};
