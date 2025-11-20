import mongoose from "mongoose";

export async function connectDB() {
  try {
    await mongoose.connect(process.env.MONGO_DB_URI);
    console.log(" MongoDB Conneccted");
  } catch (err) {
    console.error(" error", err.message);
    process.exit(1);
  }
}
