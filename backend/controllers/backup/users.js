import { db } from "../../db.js";

// export const getUser = (req, res) => {
//     const userId = req.params.userId;
//     const q = "SELECT * FROM userdata WHERE id=?";

//     db.query(q, [userId], (err, data) => {
//       if (err) return res.status(500).json(err);
//       const { password, ...info } = data[0];
//       return res.json(info);
//     });
//   };

// export const addUsers = (req, res) => {
//   res.json("from controller");
// };
