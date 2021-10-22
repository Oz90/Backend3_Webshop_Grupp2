const mongoose = require('mongoose');

const { Schema } = mongoose;

const orderSchema = new Schema(
  {
    products: [
      {
        _id: {
          type: Schema.Types.ObjectId,
          ref: 'Product',
        },
        amount: { type: Number, required: true },
      },
    ],
    user: {
      type: Schema.Types.ObjectId,
      ref: 'User',
    },
    email: {
      type: String,
    },
    isShipped: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
  },
);
const Order = mongoose.model('Order', orderSchema);
module.exports = Order;
