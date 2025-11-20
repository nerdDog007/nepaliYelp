import express from "express";
import User  from "../controllers/useController.js";

const router = express.Router();

router.get("/:id", User);

export default router;