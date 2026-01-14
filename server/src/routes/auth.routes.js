import express from "express";
import authController from "../controller/auth.controller.js";

const authRoutes = express.Router();

authRoutes.post("/register", authController.register);
authRoutes.post("/login", authController.login);

export default authRoutes;
