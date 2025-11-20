import express from "express"
import { upload } from "../middleware/upload.js";

import { Review } from "../controllers/reviewController.js"
import getReviewController from "../controllers/getReviewController.js";

const router = express.Router()

router.post("/create",upload.array("images"), Review)
router.get("/:id", getReviewController)

export default router