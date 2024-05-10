import express from "express";
import { Register, Login } from "./userController.js";
import cors from "cors";

const router = express.Router();

// app.use(cors());
router.route("/register").post(Register);

// app.use(cors());
router.route("/login").post(Login);

// router.post("/logout").post(Logout);

export default router;
