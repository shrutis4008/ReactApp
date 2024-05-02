import { db } from "../db.js";
import cors from "cors";

export const register = (req, res) => {
  // first check if user exists
  const q = "SELECT * FROM userdata WHERE email = ? OR username = ?";

  db.query(q, [req.body.email, req, body.username], (err, data) => {
    if (err) return res.jason(err);
    if (data.length) return res.status(409).json("Account already exists.");

    //   if not, create a new user
    const q =
      "INSERT INTO userdata (`username`, `email`, `password`) VALUE (?)";
    const values = [req.body.username, req.body.email, req.body.password];

    db.query(q, [values], (err, data) => {
      if (err) return res.jason(err);
      return res.status(200).json("Successfully created user");
    });
  });
};

export const login = (req, res) => {};

export const logout = (req, res) => {};
