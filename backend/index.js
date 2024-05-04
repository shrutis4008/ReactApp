// import postRoutes from "./routes/posts.js";
// import userRoutes from "./routes/users.js";
import authRoutes from "./routes/auth.js";
import cors from "cors"
import app from "./app.js"
import connectDatabase from "./config/database.js";
import dotenv from "dotenv"

// import db from "./db.js"

import  Register from "./routes/auth.js"


// const app = express();


const corsOptions = {
  origin: "*",
  credentials: true,
  optionSuccessStatus: 200,
};
dotenv.config({path:"./config/config.env"})
app.use(cors(corsOptions));


// app.use("/api/posts", postRoutes);
// app.use("/api/users", usersRoutes);
//api/
app.use("/api/auth",Register);
//  /api/auth/register/logout
// app.use("/api/auth", authRoutes);

connectDatabase()

app.listen(3001, () => {
  console.log("app currently running on port 3001");
});
