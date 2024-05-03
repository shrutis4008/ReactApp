import express from "express";
import postRoutes from "./routes/posts.js";
import userRoutes from "./routes/users.js";
import authRoutes from "./routes/auth.js";
import cors from "cors";

import { register } from "./controllers/auth.js";

const app = express();

// app.use(cors());

const corsOptions = {
  origin: "*",
  credentials: true,
  optionSuccessStatus: 200,
};

app.use(cors(corsOptions));

app.use(express.json());

app.use("/api/posts", postRoutes);
// app.use("/api/users", usersRoutes);
//api/
// app.post(register);
//  /api/auth/register/logout
app.use("/api/auth", authRoutes);

app.listen(3001, () => {
  console.log("app currently running on port 3001");
});
