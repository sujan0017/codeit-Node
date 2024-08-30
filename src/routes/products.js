import express from "express";

import {
  addProduct,
  getAllProducts,
  getProductById,
} from "../controllers/productsController.js";

const router = express.Router();

router.get("/", getAllProducts);

router.get("/:id", getProductById);

router.post("/", addProduct);

export default router;
