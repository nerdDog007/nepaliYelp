import express from "express";
import { upload } from "../middleware/upload.js";
import { createBusiness, searchAll } from "../controllers/businessController.js";

const router = express.Router();

router.post("/", upload.array("images"), createBusiness);
router.get("/", searchAll);

export default router;
