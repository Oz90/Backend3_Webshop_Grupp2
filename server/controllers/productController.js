const Product = require("./../models/ProductModel");

exports.getAllProducts = (req, res) => {};

exports.getSingleProduct = async (req, res) => {
  const productId = req.params.id;
  console.log(productId);

  const product = await Product.findById(productId);
  res.status(200).json(product);
};
