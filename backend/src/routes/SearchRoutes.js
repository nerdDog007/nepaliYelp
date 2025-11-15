import express from "express"

import { Search } from "../controllers/searchController.js"
import { SearchById } from "../controllers/searchById.js"

const router = express.Router()

router.get("/", Search)
router.get("/:id", SearchById)

export default router