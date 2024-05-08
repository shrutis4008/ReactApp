import express from "express";
import {
  createPost,
  getAllPosts,
  editPost,
  singlePost,
  deletePost,
} from "./postController.js";
import { isAuthenticatedUser } from "./auth.js";

const router = express.Router();

//Route to get all posts
router.route("/allposts").get(getAllPosts);

// Route to allow authenticated user to create post
router.route("/create").post(isAuthenticatedUser, createPost);

// Route to edit a post
router.route("/edit/:id").put(isAuthenticatedUser, editPost);

// Route to single  post
router.route("/single/:id").get(singlePost);

// Route to delete a post
router.route("/delete/:_id").delete(isAuthenticatedUser, deletePost);

export default router;
