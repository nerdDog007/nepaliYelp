import express from "express";
import cors from "cors";

import authRoutes from "./routes/authRoutes.js";
import businessRoutes from "./routes/businessRoutes.js";
import locationRoutes from "./routes/locationRoutes.js";
import searchRoutes from "./routes/SearchRoutes.js";
import reviewRoutes from "./routes/reviewRoutes.js";
import bookmarkRoutes from "./routes/bookmarkRoutes.js";
import getUserRoutes from "./routes/userRoutes.js";
const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/auth", authRoutes);
app.use("/api/business", businessRoutes);
app.use("/api/location", locationRoutes);
app.use("/api/search", searchRoutes);
app.use("/api/review", reviewRoutes);
app.use("/api/bookmark", businessRoutes);
app.use("/api/user",getUserRoutes );

export default app;
