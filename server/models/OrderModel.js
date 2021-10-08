const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const orderSchema = new Schema(
  {
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
const Order = mongoose.model("Order", orderSchema);
module.exports = Order;
