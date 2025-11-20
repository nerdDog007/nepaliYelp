import express from "express";
import createBookmark from "../controllers/createbookmarkController.js";


const router = express.Router();

router.post("/create",createBookmark);

export default router;