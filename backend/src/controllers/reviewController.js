import cloudinary from "../config/cloudinary.js";
import Business from "../models/Business.js";

export async function Review(req, res) {
  console.log(req.body);
    const urls = [];
      for (const file of req.files) {
        const uploadResult = await new Promise((resolve, reject) => {
          const stream = cloudinary.uploader.upload_stream(
            { folder: "reviews" },
            (err, result) => {
              if (err) return reject(err);
              resolve(result);
            }
          );
          stream.end(file.buffer);
        });
  
        urls.push(uploadResult.secure_url);
      }      
      const business = await Business.findById(req.body.businessId);
      await business.updateOne({
        $push: {
          reviews: {
            stars: req.body.stars,
            reviewText: req.body.inputReview,
            images: urls,
            userId: req.body.userId,
          },
        }
      })
  res.json({ success: true });
}