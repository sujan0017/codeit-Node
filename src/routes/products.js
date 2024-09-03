import express from "express";

import {
  addProduct,
  deleteProduct,
  getAllProducts,
  getProductById,
  updateProduct,
} from "../controllers/productsController.js";
import auth from "../middleware/auth.js";
import roleBaseAuth from "../middleware/roleBaseAuth.js";

const router = express.Router();

router.get("/", getAllProducts);

router.get("/:id", getProductById);

router.post("/", auth, addProduct);

router.put("/:id", auth, updateProduct);

router.delete("/:id", [auth, roleBaseAuth("ADMIN")], deleteProduct);

export default router;
