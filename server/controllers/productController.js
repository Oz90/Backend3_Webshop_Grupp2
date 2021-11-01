const Product = require('../models/ProductModel');

exports.getAllProducts = async (req, res) => {
  try {
    const allProducts = await Product.find({});
    res.status(200).json(allProducts);
  } catch (err) {
    console.error(err);
    res.status(500).send(err);
  }
};

exports.getSingleProduct = async (req, res) => {
  const productId = req.params.id;

  const product = await Product.findById(productId);
  res.status(200).json(product);
};

exports.deleteSingleProduct = async (req, res) => {
  try {
    const productId = req.params.id;
    await Product.findByIdAndDelete(productId);
  } catch (err) {
    console.error(err);
    res.status(500).send(err);
  }
};

exports.addProduct = async (req, res) => {
  try {
    const images = [];
    const image1 = req.body.image1 ? req.body.image1 : 'defaultimage.jpg';
    const image2 = req.body.image2 ? req.body.image2 : 'defaultimage2.jpg';
    const image3 = req.body.image3 ? req.body.image3 : 'defaultimage3.jpg';
    images.push(image1, image2, image3);

    const newProduct = {
      title: req.body.title,
      description: req.body.description,
      price: req.body.price,
      category: req.body.category,
      manufacturer: req.body.manufacturer,
      thumbnail: req.body.thumbnail,
      images,
    };

    if (
      !req.body.title
      || !req.body.description
      || !req.body.price
      || !req.body.category
      || !req.body.manufacturer
      || !req.body.thumbnail
    ) {
      return res
        .status(400)
        .json({ errorMessage: 'Please fill in all required fields' });
    }

    const product = await new Product(newProduct);
    product.save();
    res.status(200).json(product);
  } catch (err) {
    console.error(err);
    res.status(500).send();
  }
};

exports.editProduct = async (req, res) => {
  try {
    const { id } = req.params;
    console.log(req.body);

    const images = [];
    const image1 = req.body.image1 ? req.body.image1 : 'defaultimage.jpg';
    const image2 = req.body.image2 ? req.body.image2 : 'defaultimage2.jpg';
    const image3 = req.body.image3 ? req.body.image3 : 'defaultimage3.jpg';
    images.push(image1, image2, image3);
    
    if (
      !req.body.title
      || !req.body.description
      || !req.body.price
      || !req.body.category
      || !req.body.manufacturer
      || !req.body.thumbnail
    ) {
      return res
        .status(400)
        .json({ errorMessage: 'Please fill in all required fields' });
    }
    const newProduct = {
      title: req.body.title,
      description: req.body.description,
      price: req.body.price,
      category: req.body.category,
      manufacturer: req.body.manufacturer,
      thumbnail: req.body.thumbnail,
      images,
    };

    const filter = { _id: id }

    await Product.findOneAndUpdate(filter, newProduct, { new: true });

    res.status(200).json('Updated');
  } catch (err) {
    console.error(err);
    res.status(500).send();
  }
};
