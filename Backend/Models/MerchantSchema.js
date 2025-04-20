const mongoose = require("mongoose");
const { Schema } = mongoose;
const MerchantSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    phoneNumber: {
      type: Number,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
  }
);
const Merchant = mongoose.model("Merchant", MerchantSchema,"merchant");

module.exports = Merchant;
