import { db } from "../db.js";
// import bcrypt from "bcryptjs";

export const register = (req, res) => {
  console.log("i got a call from front-end.");
  const { username, email, password } = req.body;

  // res
  //   .status(200)
  //   .json({
  //     message: `username: ${username}, \n email: ${email} \n password: ${password}`,
  //   });
  // first check if user exists
  // const q = "SELECT * FROM userdata WHERE email = ? OR username = ?";

  // db.query(q, [req.body.email, req, body.username], (err, data) => {
  //   if (err) return res.jason(err);
  //   if (data.length) return res.status(409).json("Account already exists.");

  // const salt = bcrypt.genSaltSync(10);
  // const hash = bcrypt.hashSync("B4c0//", salt);

  //   //   if not, create a new user
  const q = "INSERT INTO newtable (`username`, `email`, `password`) VALUE (?)";
  const values = [username, email, password];

  try {
    db.connect(function (err) {
      if (err) {
        console.error("error connecting: " + err.stack);
        return;
      }

      console.log("connected as id " + db.threadId);
    });
    db.query(
      `INSERT INTO newtable (username, email, password) VALUE (${username}, ${email}, ${password})`,
      (err, data) => {
        if (err)
          return res(401).json({ message: "getting an error in db.query" });
        return res.status(200).json("Successfully created user");
      }
    );
  } catch (err) {
    console.log(err);
    return res.status(401).json("gtting and error");
  }
};

export const login = (req, res) => {};

export const logout = (req, res) => {};
