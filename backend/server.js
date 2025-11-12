import dotenv from "dotenv";
dotenv.config();

import { connectDB } from "./src/config/db.js";
import app from "./src/app.js";
import User from "./src/models/User.js";

connectDB();

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => console.log(` Server ruing on ${PORT}`));
