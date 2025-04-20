var jwt = require('jsonwebtoken');
const Merchant = require("../Models/MerchantSchema");

const fetchmerchant = async (req, res, next) => {
    // Get the user from the jwt token and add id to req object
    
    
    const token = req.header("auth");
    
    if (!token) {
        res.status(401).send({ error: "Please authenticate using a valid token" })
    }
    try {
        const data = jwt.verify(token,process.env.JWT_SECRET);
        //console.log(data.user.id);
        const farmerl = await Merchant.findById(data.user.id);
        //console.log(farmerl);
        if(!farmerl){
            res.status(403).send({ error: "Please authenticate as a merchant" });
        }
        else{
            req.user = data.user;
            next();
        }
        
        
    } catch (error) {
        //console.log(error)
        res.status(401).send({ error: "Please authenticate using a valid token" })
    }

}


module.exports = fetchmerchant;