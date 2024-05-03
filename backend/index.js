import express from "express";
import postRoutes from "./routes/posts.js";
import userRoutes from "./routes/users.js";
import authRoutes from "./routes/auth.js";
import cors from "cors";

const app = express();

app.use(cors());

app.use(express.json());
app.use("/api/posts", postRoutes);
// app.use("/api/users", usersRoutes);
app.use("/api/auth", authRoutes);

app.listen(3001, () => {
  console.log("app currently running on port 3001");
});
