import express from "express";

import {
  addProduct,
  deleteProduct,
  getAllProducts,
  getProductById,
  updateProduct,
} from "../controllers/productsController.js";
import logger from "../middleware/logger.js";
import auth from "../middleware/auth.js";

const router = express.Router();

router.get("/", logger, getAllProducts);

router.get("/:id", getProductById);

router.post("/", auth, addProduct);

router.put("/:id", auth, updateProduct);

router.delete("/:id", auth, deleteProduct);

export default router;
