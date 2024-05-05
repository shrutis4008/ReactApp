import express from "express";
import { createPost, getAllPosts } from "../controllers/postController.js";
import { isAuthenticatedUser } from "../middleware/auth.js";

const router = express.Router();

router.route("/create").post(isAuthenticatedUser, createPost);
router.route("/allposts").post(getAllPosts);

export default router;
