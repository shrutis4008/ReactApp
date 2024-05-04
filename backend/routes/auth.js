import express from "express";
import {Register} from "../controllers/usercontroller.js"


// import { login, register, logout } from "../controllers/auth_backup.js";

const router = express.Router();


router.post("/register", Register);
// router.post("/logout", logout);
// router.post("/login", login);

export default router;
