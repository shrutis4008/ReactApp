import mongoose from 'mongoose'


export const getPosts = (req, res) => {
  // query to get all posts 
  const q = req.query ? "SELECT * FROM posts";

  db.query(q,[req.query], (err, data)=>{
    if (err) return res.send(err)

    return res.status(200).json(data);
  })


  
  // res.json("from controller");
};

export const getPost = (req, res) => {

  const q = req.query ? "SELECT `usermame`,`title`,`desc`, `img`, `date` FROM users u JOIN posts p ON u.id===p.uid WHERE p.id=?";

  db.query(q,[req.param.id], (err, data)=>{
    if (err) return res.send(err)

    return res.status(200).json(data);
  })
  // res.json("from controller");
};

export const addPost = (req, res) => {
  res.json("from controller");
};

export const deletePost = (req, res) => {
  res.json("from controller");
};

export const updatePost = (req, res) => {
  res.json("from controller");
};
