import mongoose from 'mongoose'
import jwt from "jsonwebtoken"


export const getPosts = (req, res) => {
  // query to get all posts 
  const q = req.query ? "SELECT * FROM posts";

  db.query(q,[req.query], (err, data)=>{
    if (err) return res.status(500).json(err)
      return res.status(200).json(data);
  })
  // res.json("from controller");
};

export const getPost = (req, res) => {
// query post by ID
  const q = "SELECT `usermame`,`title`,`desc`, `p.img`, `date` FROM users u JOIN posts p ON u.id=p.uid WHERE p.id=?"

  db.query(q,[req.params.id], (err, data)=>{
    if (err) return res.status(500).json(err)
      return res.status(200).json(data);
  })
  // res.json("from controller");
};

export const addPost = (req, res) => {
  res.json("from controller");
};

export const deletePost = (req, res) => {
  const token = req.cookie.access_token 
  if(!token) return res.status(401).json("No permission to delete this post!")



  // add jwt token verification



  // res.json("from controller");
};

export const updatePost = (req, res) => {
  res.json("from controller");
};
