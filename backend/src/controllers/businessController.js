import Business from "../models/Business.js";
import cloudinary from "../config/cloudinary.js";
import User from "../models/User.js";

export const createBusiness = async (req, res) => {
  try {
    const { businessName, location, locationName, userId } = req.body;

    const parsedLocation = JSON.parse(location);
    console.log("this.com");

    const urls = [];

    for (const file of req.files) {
      // Wrap upload_stream properly
      const uploadResult = await new Promise((resolve, reject) => {
        const stream = cloudinary.uploader.upload_stream(
          { folder: "businesses" },
          (err, result) => {
            if (err) return reject(err);
            resolve(result);
          }
        );
        stream.end(file.buffer);
      });

      urls.push(uploadResult.secure_url);
    }
    console.log(urls);
    await Business.create({
      businessName,
      coordinates: parsedLocation,
      url: urls,
      userId,
      locationName,
    });

    res.json({ success: true });

  } catch (err) {
    console.error(err); // log the actual error
    res.status(500).json({ message: "Business creation error", error: err.message });
  }
};

export const searchAll = async (req, res) => {
  const businesses = await Business.find({}).limit(10);
  console.log("tis");
  
  res.json(businesses);
};


