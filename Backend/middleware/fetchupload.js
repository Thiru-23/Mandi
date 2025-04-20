const jwt = require("jsonwebtoken");
const Farmer = require("../Models/FarmerSchema");
const multer = require("multer");
const cloudinary = require("cloudinary").v2;
const { CloudinaryStorage } = require("multer-storage-cloudinary");

// Configure Cloudinary
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

// Middleware to authenticate farmer
const fetchfarmer = async (req, res, next) => {
  const token = req.header("auth");
  if (!token)
    return res.status(401).send({ error: "Please authenticate using a valid token" });

  try {
    const data = jwt.verify(token, process.env.JWT_SECRET);
    const farmer = await Farmer.findById(data.user.id);
    if (!farmer)
      return res.status(403).send({ error: "Please authenticate as a farmer" });

    req.user = data.user;
    next();
  } catch (error) {
    return res.status(401).send({ error: "Invalid token" });
  }
};

// Cloudinary storage configuration
const storage = new CloudinaryStorage({
  cloudinary: cloudinary,
  params: {
    folder: "crop_images",
    allowed_formats: ["jpg", "jpeg", "png"],
    public_id: (req, file) => `crop-${Date.now()}`,
  },
});

const upload = multer({
  storage: storage,
  fileFilter: (req, file, cb) => {
    if (
      file.mimetype === "image/png" ||
      file.mimetype === "image/jpg" ||
      file.mimetype === "image/jpeg"
    ) {
      cb(null, true);
    } else {
      cb(new Error("Only .png, .jpg and .jpeg format allowed!"));
    }
  },
  limits: { fileSize: 2090000 },
});

// Image upload middleware
const uploadCrop = (req, res, next) => {
  const uploadSingle = upload.single("image");
  uploadSingle(req, res, async (err) => {
    if (err)
      return res.status(400).json({ success: false, message: err.message });
    else {
      if (req.file && req.file.path) {
        req.image = req.file.path;
      }
      next();
    }
  });
};

const fetchupload = { fetchfarmer, uploadCrop };
module.exports = fetchupload;
