import express from "express";
import { signup, login, checkEmail } from "../controllers/authController.js";

const router = express.Router();

router.post("/signup", signup);
router.post("/login", login);
router.post("/checkEmail",checkEmail)
export default router;
