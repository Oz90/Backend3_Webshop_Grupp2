const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const productSchema = new Schema(
  {
    title: { type: String, required: true },
    description: { type: String, required: true },
    price: { type: Number, required: true },
    category: { type: String, required: true },
    weight: { type: Number, required: true },
    manufacturer: { type: String, required: true },
    thumbnail: { type: String, required: true },
    images: { type: Array, required: true }
  },
  {
    timestamps: true
  }
);
const Product = mongoose.model("Product", productSchema);
module.exports = Product;
