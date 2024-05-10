import cors from "cors";
import app from "./app.js";
import connectDatabase from "./config/database.js";
import dotenv from "dotenv";
import express from "express";

app.use(express());
app.use(cors());

app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "OPTIONS, POST,GET, PUT, DELETE");
  res.header("Cross-Origin", "True");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, Authorization"
  );
});

// app.use(cors());

// https://react-1flkd5rrp-shrutis-projects-226bf37e.vercel.app

// const corsOptions = {
//   origin: "http://localhost:3000/",
//   credentials: true,
//   optionSuccessStatus: 200,
//   accessControlAllowOrigin: "*",
//   accessControlAllowCredentials: true,
//   accessControlAllowHeaders:
//     "Access-Control-Allow-Headers, Origin, Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers",
//   methods: "OPTIONS, POST,GET, PUT",
// };

//
process.on("uncaughtException", (err) => {
  console.log(`error:${err.message}`);
  process.exit(1);
});

dotenv.config({ path: "./config/config.env" });

connectDatabase();

const port = process.env.PORT || 4000;
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

// const server = app.listen(3001, () => {
//   console.log("app currently running on port 3001");
// });

// process.on("unhandledRejection", (err) => {
//   console.log(`error:${err.message}`);
//   server.close(() => {
//     process.exit(1);
//   });
// });
