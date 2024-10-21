import express from "express";
import { login,register,logout, verifyToken } from "../controllers/userController.js";

const router=express.Router();

router.route("/register").post(register);
router.route("/login").post(login);
router.route("/logout").post(logout);
router.route("/verify-token").get(verifyToken);

export default router;