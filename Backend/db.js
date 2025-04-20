require('dotenv').config();
const mongoose = require("mongoose");

const mongoURL = process.env.DBURL;

const connectToMongo = async () => {
  try {
    await mongoose.connect(mongoURL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("✅ MongoDB Connected Successfully");
  } catch (error) {
    console.error("❌ MongoDB Connection Failed:", error.message);
    process.exit(1); // Exit with failure
  }
};

module.exports = connectToMongo;
