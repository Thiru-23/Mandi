require('dotenv').config()
const express = require("express");
const connectToMongo = require("./db");
const farmerRoute = require("./routes/Farmer");
 const merchantRoute = require("./routes/Merchant");
 const cropfarmerRoute =require("./routes/Cropfarmer");
const cropmerchantRoute =require("./routes/Cropmerchant");
const bodyParser = require("body-parser");
 const test=require("./routes/test");

const cors = require('cors');    
 const corsOpts = {
    origin: '*',
    credentials: true,
    methods: ['GET','POST','HEAD','PUT','PATCH','DELETE'],
    allowedHeaders: ['Content-Type'],
    exposedHeaders: ['Content-Type']
};

connectToMongo();

const app = express();
const port = 8000;
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/images',express.static('images'));
app.use(express.json());
app.get('/', (req, res) => {
  res.send('Hello World from jim!')
})
//Available Routes
app.use("/test",test);
app.use("/api/farmer", farmerRoute);
app.use("/api/merchant", merchantRoute);
 app.use("/api/sell/farmer", cropfarmerRoute);
 app.use("/api/buy/merchant", cropmerchantRoute);

app.listen(port, () => {
  console.log(`Backend listening at http://localhost:${port}`);
});
