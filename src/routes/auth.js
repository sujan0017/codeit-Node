import express from "express";
import {
  forgotPassword,
  login,
  logout,
  register,
  resetPassword,
  
} from "../controllers/authController.js";

const router = express.Router();
router.post("/forgot-password", forgotPassword);

router.post("/reset-password", resetPassword);

router.post("/register", register);

router.post("/login", login);

router.post("/logout", logout);



export default router;
