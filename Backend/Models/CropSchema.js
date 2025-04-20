const mongoose = require("mongoose");
const { Schema } = mongoose;
const CropSchema = new Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Farmer",
  },
  cropName: {
    type: String,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
  market: {
    type: String,
    required: true,
  },
  plotno:{
    type:Number,
    required:true,
  },
  weight: {
    type: Number,
    required: true,
  },
  image:{
    type:String,
  },
  merchant: {
    type: mongoose.Schema.Types.ObjectId,
    default: "62407b088b7a6eff168a9123",
    ref: "Merchant",
  },
  flag: {
    type: Boolean,
    default: false,
  },
  price: {
    type: Number,
    default: "0",
  },
  date:{
    type: Date,
    default: Date.now
  },
});
const Crop = mongoose.model("crop", CropSchema, "CropData");

module.exports = Crop;
