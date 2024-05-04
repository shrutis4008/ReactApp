import { db } from "../../db.js";
// import bcrypt from "bcryptjs";

export const register = (req, res) => {
  console.log("i got a call from front-end.");

  // first check if user exists
  const q = "SELECT * FROM userdata WHERE email = ? OR username = ?";
  // const { username, email, password } = req.body;

  db.query(q, [req.body.email, req, body.username], (err, data) => {
    if (err) return res.json(err);
    if (data.length) return res.status(409).json("Account already exists.");

    // const salt = bcrypt.genSaltSync(10);
    // const hash = bcrypt.hashSync("B4c0//", salt);

    //   //   if not, create a new user
    const q =
      "INSERT INTO test.userdata (`username`, `email`, `password`) VALUES (?)";
    const values = [req.body.username, req.body.email, req.body, password];
  });

  db.query(
    q,
    [values],
    // `INSERT INTO test.userdata (username, email, password) VALUES (${username}, ${email}, ${password})`,
    (err, data) => {
      if (err) return res.json(err);
      return res.status(200).json("Successfully created user");
    }
  );
};

// const values = [username, email, password];

// check if db connected
// connection.connect(function (err) {
//   if (err) {
//     console.error("error connecting: " + err.stack);
//     return;
//   }

//   console.log("connected as id " + connection.threadId);
// });

// insert into db query

// catch (err) {
//   console.log(err);
//   return res.status(401).json("getting an error");
// }

export const login = (req, res) => {};

export const logout = (req, res) => {};
