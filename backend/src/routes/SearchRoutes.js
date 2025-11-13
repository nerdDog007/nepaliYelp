import express from "express"

import { Search } from "../controllers/searchController.js"

const router = express.Router()

router.get("/", Search)

export default router