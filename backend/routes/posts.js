import express from "express";
import { addPost } from "../controllers/post.js";

const router = express.Router();

router.get("/test", addPost);
// addPost constant was created under controllers/posts.js

export default router;
