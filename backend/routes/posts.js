import express from "express";
import { addPost, deletePost, getPost, getPosts, updatePost} from "../controllers/postcontroller.js"

const router = express.Router();

// allposts, post by id, publish post, delete post, update post
router.get("/", getPosts) 
router.get("/:id", getPost) 
router.post("/", addPost)  
router.delete("/", deletePost) 
router.put("/:id", updatePost) 
export default router;
