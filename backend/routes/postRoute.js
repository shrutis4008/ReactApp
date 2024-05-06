import express from "express";
import { createPost, getAllPosts } from "../controllers/postController.js";
import { isAuthenticatedUser } from "../middleware/auth.js";

const router = express.Router();

//Route to get all posts
router.route("/allposts").post(getAllPosts);

// Route to allow authenticated user to create post
router.route("/create").post(isAuthenticatedUser, createPost);

// Route to edit a post
// router.route("/:id").put(isAuthenticatedUser, editPost)

// Route to delete a post
// router.route("/delete/:_id").put(isAuthenticatedUser, deletePost)

export default router;
