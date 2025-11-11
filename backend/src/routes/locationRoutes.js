import express from "express";
import { getLocationName } from "../controllers/locationController.js";

const router = express.Router();

router.post("/", getLocationName);

export default router;
