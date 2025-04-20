const mongoose = require("mongoose");
const { Schema } = mongoose;
const FarmerSchema = new Schema(
  
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
const Farmer = mongoose.model("Farmer", FarmerSchema,"farmer");

module.exports = Farmer;
