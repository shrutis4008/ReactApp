import cors from "cors";
import app from "./app.js";
import connectDatabase from "./config/database.js";
import dotenv from "dotenv";

const corsOptions = {
  origin: "*",
  credentials: true,
  optionSuccessStatus: 200,
};
dotenv.config({ path: "./config/config.env" });
app.use(cors(corsOptions));

connectDatabase();

app.listen(3001, () => {
  console.log("app currently running on port 3001");
});
