require('dotenv').config()
const express = require("express");
const router = express.Router();
const Merchant = require("../Models/MerchantSchema");
const { body, validationResult } = require("express-validator");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs"); //for password hashing & salt
//Route1:Create a User using : POST "/api/merchant/msignup"

router.post(
  "/msignup",
  [
    body("email", "Enter a Valid Email").isEmail(),
    body("name", "Enter a Valid Name").isLength({ min: 3 }),
    body("phoneNumber", "Enter a Valid PhoneNumber").isLength(10),
    body("password", "password must have at least 5 character").isLength({
      min: 5,
    }),
  ],
  async (req, res) => {
    let success = false;
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    try {
      let userphone = await Merchant.findOne({ phoneNumber: req.body.phoneNumber });
      let user = await Merchant.findOne({ email: req.body.email });
      if (user || userphone) {
         success = false;
        return res.status(400).json({ error: "Sorry User Already Exist" });
      }

      const salt = await bcrypt.genSalt(10);
      const hashPass = await bcrypt.hash(req.body.password, salt);
      //Create User
      user = await Merchant.create({
        name: req.body.name,
        email: req.body.email,
        phoneNumber: req.body.phoneNumber,
        password:hashPass,
       
      });
      const data = {
        user: {
          id: user.id,
        },
      };
      // console.log(user.id)
      const authToken = jwt.sign(data, process.env.JWT_SECRET);
       success = true;
      // console.log(authToken);
      res.json({success, authToken });
    } catch (error) {
      console.error(error.message);
      res.status(500).send("Internal Error Occured");
    }
  }
);


//Route2:Login a merchant using : POST "/api/merchant/mlogin"

router.post(
  "/mlogin",
  [
    body("email", "Enter a Valid Email").isEmail(),
    body("password", "Password cannot be Blank").exists(),
  ],
  async (req, res) => {
    let success = false;
    //if error return Bad request
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    const { email, password } = req.body;
    try {
      let user = await Merchant.findOne({ email });
      if (!user) {
         success = false;
        return res
          .status(400)
          .json({ error: "Please Login with Correct Credential" });
      }
   
      const passwordCompare = await bcrypt.compare(password, user.password);
      if (!passwordCompare) {
         success = false;
        return res
          .status(400)
          .json({ error: "Please Login with Correct Credential" });
      }
      const data = {
        user: {
          id: user.id,
        },
      };
      const authToken = jwt.sign(data, process.env.JWT_SECRET);
       success = true;
      // console.log(authToken);
      // console.log(user.id);
      res.json({success, authToken });
    } catch (error) {
      console.error(error.message);
  res.status(500).send("Internal Error Occured"); 
    }
  }
);

module.exports = router;

