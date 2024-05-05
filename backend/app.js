import express from "express";
import cookieparser from "cookie-parser";

// routes import
import user from "./routes/userRoute.js";
import post from "./routes/postRoute.js";

const app = express();
app.use(express.json());
app.use(cookieparser());

// route use
app.use("/api/auth", user);
app.use("/api/post", post);
export default app;
