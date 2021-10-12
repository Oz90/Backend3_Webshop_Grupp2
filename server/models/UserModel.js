const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema(
  {
    fullName: { type: String, required: true },
    displayName: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    phoneNumber: { type: Number, required: true },
    address: { type: String, required: true },
    city: { type: String, required: true },
    zipcode: { type: String, required: true },
  
    cart: [
      {
        product: {
          type: Schema.Types.ObjectId,
          ref: "Product"
        },
        amount: { type: Number, required: true }
      }
    ],
    isAdmin: {
      type: Boolean,
      default: false
    }
  },
  {
    timestamps: true
  }
);
const User = mongoose.model("User", userSchema);
module.exports = User;
