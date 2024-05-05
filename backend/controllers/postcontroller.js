import Post from "../models/postSchema.js";

export const createPost = async (req, res, next) => {
  req.body.user = req.user.id;
  const { title, description, user } = req.body;
  const post = await Post.create({
    title,
    description,
    user,
  });
  res.status(201).json({
    success: true,
    post,
  });
};

export const getAllPosts = async (req, res, next) => {
  const posts = Post.find();
  if (!posts) {
    res.status(400).json({
      success: false,
      message: "No posts available.",
    });
  }
  res.status(200).json({
    success: true,
    posts,
  });
};

// single post by id

// edit post

// delete post
