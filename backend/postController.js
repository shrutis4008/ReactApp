import Post from "./postSchema.js";
import cathAsyncErrors from "./cathAsyncErrors.js";

//Create a post with fields title, descrption and username
//
export const createPost = cathAsyncErrors(async (req, res, next) => {
  res.header("Content-Type", "application/json");

  try {
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
  } catch (error) {
    res.status(500).json({
      success: false,
      message: `ERROR ${error.message}`,
    });
  }
});

// Get all posts
export const getAllPosts = cathAsyncErrors(async (req, res, next) => {
  res.header("Content-Type", "application/json");

  try {
    const posts = await Post.find();
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
  } catch (error) {
    res.status(500).json({
      success: false,
      message: `ERROR ${error.message}`,
    });
  }
});

// Edit a post
export const editPost = cathAsyncErrors(async (req, res, next) => {
  res.header("Content-Type", "application/json");

  try {
    let singlePost = await Post.findById(req.params.id);
    if (!singlePost) {
      return res.status(404).json({
        success: false,
        message: "Blog post not found",
      });
    }
    const { title, description } = req.body;
    const post = await Post.findByIdAndUpdate(
      singlePost,
      { title, description },
      { new: true, runValidators: true, useFindAndModify: false }
    );
    return res.status(200).json({
      success: true,
      post,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: `ERROR ${error.message}`,
    });
  }
});

// Single post

export const singlePost = cathAsyncErrors(async (req, res, next) => {
  res.header("Content-Type", "application/json");

  try {
    let singlePost = await Post.findById(req.params.id).populate("user");
    if (!singlePost) {
      return res.status(404).json({
        success: false,
        message: "Blog post not found",
      });
    }
    return res.status(200).json({
      success: true,
      singlePost,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: `ERROR ${error.message}`,
    });
  }
});

// delete post

export const deletePost = cathAsyncErrors(async (req, res, next) => {
  res.header("Content-Type", "application/json");

  try {
    let singlePost = await Post.findById(req.params._id);
    // let author = req.user._id;
    // console.log("author", author);
    // console.log("single blog post user", singlePost.user);
    if (!singlePost) {
      return res.status(404).json({
        success: false,
        message: "Blog post not found",
      });
    }
    console.log(singlePost);
    // if (author === singlePost.user) {
    Post.deleteOne({
      _id: singlePost,
    }).then(() => {
      return res.status(200).json({
        success: true,
        message: `post deleted`,
      });
    });
    // }
    // else {
    //   return res.status(401).json({
    //     success: false,
    //     message: `ERROR ${error.message}`,
    //   });
    // }
  } catch (error) {
    return res.status(500).json({
      success: false,

      message: `ERROR500 ${error.message}`,
    });
  }
});
