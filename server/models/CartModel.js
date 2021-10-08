const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const cartSchema = new Schema(
  {
    products: [
      {
        product: {
          type: Schema.Types.ObjectId,
          ref: "Product"
        },
        amount: { type: Number, required: true }
      }
    ],
    user: {
      type: Schema.Types.ObjectId,
      ref: "User"
    },
    isShipped: {
      type: Boolean,
      default: false
    }
  },
  {
    timestamps: true
  }
);
const Cart = mongoose.model("Cart", cartSchema);
module.exports = Cart;
