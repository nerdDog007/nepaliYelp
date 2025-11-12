import express from "express";
import { upload } from "../middleware/upload.js";
import { createBusiness, searchAll } from "../controllers/businessController.js";

const router = express.Router();

router.post("/create", upload.array("images"), createBusiness);
router.get("/search", searchAll);

export default router;
