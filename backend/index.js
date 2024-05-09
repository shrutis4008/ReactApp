import cors from "cors";
import app from "./app.js";
import connectDatabase from "./config/database.js";
import dotenv from "dotenv";
app.use(cors());

app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "OPTIONS, POST,GET, PUT");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, Authorization"
  );
});

const corsOptions = {
  origin: "http://localhost:3000/",
  credentials: true,
  optionSuccessStatus: 200,
  accessControlAllowOrigin: "*",
  accessControlAllowCredentials: true,
  accessControlAllowHeaders:
    "Access-Control-Allow-Headers, Origin, Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers",
  methods: "OPTIONS, POST,GET, PUT",
};

//
process.on("uncaughtException", (err) => {
  console.log(`error:${err.message}`);
  process.exit(1);
});

dotenv.config({ path: "./config/config.env" });

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
