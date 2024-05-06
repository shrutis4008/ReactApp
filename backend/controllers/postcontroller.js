import Post from "../models/postSchema.js";

//Create a post with fields title, descrption and username
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

// Get all posts
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

// Edit a post
// export const editPost = async (req, res, next) => {
//   const {id} = req.params
//   const { title, description } = req.body;
//   const post = await Post.findByIdAndUpdate({
//     _id: req.params.id
//   });
//   res.status(201).json({
//     success: true,
//     post,
//   });
// };

// delete post
// export const deletePost = async (req, res, next) => {
//   const {id} = req.params
//   const post = await Post.findByIdAndDelete({
//    req.params.id
//   });
//   res.status(201).json({
//     success: true,
//     ???,
//   });
// };

// most recent posts
