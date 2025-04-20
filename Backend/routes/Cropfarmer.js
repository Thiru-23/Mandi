const express = require("express");
const router = express.Router();
const fetchupload = require("../middleware/fetchupload");
const { validationResult } = require("express-validator");
const CropSchema = require("../Models/CropSchema");
const MerchantSchema = require("../Models/MerchantSchema");

// Route 1: Add Crop
router.post(
  "/addcrop",
  [fetchupload.fetchfarmer, fetchupload.uploadCrop],
  async (req, res) => {
    let success = false;
    try {
      const { cropName, address, market, plotno, weight } = req.body;

      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
      }

      const crop = new CropSchema({
        cropName,
        address,
        market,
        plotno,
        weight,
        user: req.user.id,
      });

      if (req.image) {
        crop.image = req.image;
      }

      const savedCrop = await crop.save();
      success = true;
      res.json(savedCrop);
    } catch (error) {
      console.error(error.message);
      res.status(500).send("Internal Server Error");
    }
  }
);

// Route 2: Get Current Bidded Crops
router.get("/current", fetchupload.fetchfarmer, async (req, res) => {
  try {
    const crops = await CropSchema.find({
      user: req.user.id,
      flag: false,
      price: { $ne: 0 },
    }).sort({ price: -1 });

    res.json(crops);
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Internal Server Error");
  }
});

// Route 3: Get Crops without Bids
router.get("/forbid", fetchupload.fetchfarmer, async (req, res) => {
  try {
    const crops = await CropSchema.find({
      user: req.user.id,
      flag: false,
      price: 0,
    }).sort({ price: -1 });

    res.json(crops);
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Internal Server Error");
  }
});

// Route 4: Get Confirmed Crops (Dashboard)
router.get("/dashboard", fetchupload.fetchfarmer, async (req, res) => {
  try {
    const crops = await CropSchema.find({
      user: req.user.id,
      flag: true,
    });

    res.json(crops);
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Internal Server Error");
  }
});

// Route 5: Confirm Sell
router.put("/confirm/:id", fetchupload.fetchfarmer, async (req, res) => {
  try {
    let crop = await CropSchema.findById(req.params.id);
    if (!crop) return res.status(404).send("Not Found");
    if (crop.user.toString() !== req.user.id)
      return res.status(401).send("Not Allowed");

    if (crop.flag === true)
      return res.status(208).json("Your crop is already sold");

    await CropSchema.findByIdAndUpdate(req.params.id, {
      flag: true,
    });

    await CropSchema.deleteMany({
      user: crop.user,
      cropName: crop.cropName,
      market: crop.market,
      weight: crop.weight,
      address: crop.address,
      flag: false,
    });

    res.json("Your sell order is confirmed");
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Internal Server Error");
  }
});

// Route 6: Delete Crop
router.delete("/deletecrop/:id", fetchupload.fetchfarmer, async (req, res) => {
  try {
    let crop = await CropSchema.findById(req.params.id);
    if (!crop) return res.status(404).send("Crop Not Found");

    await CropSchema.findByIdAndDelete(req.params.id);
    res.json({ Success: "Crop has been Deleted Successfully", crop });
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Internal Server Error");
  }
});

// Route 7: Update Crop
router.put("/updatecrop/:id", fetchupload.fetchfarmer, async (req, res) => {
  const { cropName, address, plotno, weight, market } = req.body;
  try {
    const updateFields = {};
    if (cropName) updateFields.cropName = cropName;
    if (address) updateFields.address = address;
    if (plotno) updateFields.plotno = plotno;
    if (weight) updateFields.weight = weight;
    if (market) updateFields.market = market;

    let crop = await CropSchema.findById(req.params.id);
    if (!crop) return res.status(404).send("Not Found");
    if (crop.user.toString() !== req.user.id)
      return res.status(401).send("Not Allowed");

    crop = await CropSchema.findByIdAndUpdate(
      req.params.id,
      { $set: updateFields },
      { new: true }
    );

    res.json({ crop });
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Internal Error Occurred");
  }
});

// Route 8: Get Merchant Info by ID
router.get("/mname/:id", async (req, res) => {
  try {
    const data = await MerchantSchema.findById(req.params.id);
    if (!data) return res.status(404).send("Not Found");

    const detail = {
      name: data.name,
      phoneno: data.phoneNumber,
    };

    res.json(detail);
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Internal Server Error");
  }
});

module.exports = router;
