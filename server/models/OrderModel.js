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
    shippingAddress: {
      type: Object,
    },
    isShipped: {
      type: Boolean,
      default: false,
    },
    shippingCost: { 
      type: Number, 
      default: 49
    },
    totalSum: { 
      type: Number
    },
  },
  {
    timestamps: true,
  },
);
const Order = mongoose.model('Order', orderSchema);
module.exports = Order;
