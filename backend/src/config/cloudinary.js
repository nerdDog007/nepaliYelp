import { v2 as cloudinary } from "cloudinary";
import dotenv from "dotenv";
dotenv.config();

cloudinary.config({
  cloud_name: 'dc0usqzi7',
  api_key: '951891249541815',
  api_secret: process.env.CLOUDINARY_SECRET,
});

export default cloudinary;
