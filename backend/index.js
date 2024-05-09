import cors from "cors";
import app from "./app.js";
import connectDatabase from "./config/database.js";
import dotenv from "dotenv";

const corsOptions = {
  origin: "http://localhost:3000/",
  credentials: true,
  optionSuccessStatus: 200,
  accessControlAllowOrigin: "*",
  accessControlAllowCredentials: true,
  accessControlAllowHeaders: "Content-Type",
  methods: "OPTIONS, POST,GET, PUT",
};

// "Access-Control-Allow-Headers, Origin, Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers"
process.on("uncaughtException", (err) => {
  console.log(`error:${err.message}`);
  process.exit(1);
});

dotenv.config({ path: "./config/config.env" });
app.use(cors(corsOptions));

connectDatabase();

const server = app.listen(3001, () => {
  console.log("app currently running on port 3001");
});

process.on("unhandledRejection", (err) => {
  console.log(`error:${err.message}`);
  server.close(() => {
    process.exit(1);
  });
});
