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
  
    // currentCart: {
    //   type: Schema.Types.ObjectId,
    //   ref: "Cart"
    // },
    isAdmin: {
      type: Boolean,
      default: false
    }
    // orders: { type: Array, required: true }
  },
  {
    timestamps: true
  }
);
const User = mongoose.model("User", userSchema);
module.exports = User;
