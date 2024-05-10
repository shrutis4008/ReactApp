import cors from "cors";
import app from "./app.js";
import connectDatabase from "./config/database.js";
import dotenv from "dotenv";

app.use(function (req, res, next) {
  res.header(
    "Access-Control-Allow-Origin",
    "https://react-blog-app-ixe0.onrender.com/",
    "*"
  );
  res.header("Access-Control-Allow-Methods", "OPTIONS, POST,GET, PUT, DELETE");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, Authorization"
  );
  next();
});
app.use(cors());

// const allowedOrigins = ["https://react-blog-app-ixe0.onrender.com/"];

// app.use(
//   cors({
//     origin: (origin, callback) => {
//       if (!origin || allowedOrigins.indexOf(origin) !== -1) {
//         callback(null, true);
//       } else {
//         callback(new Error("Not allowed by CORS"));
//       }
//     },
//     methods: "GET,POST,PUT,DELETE,HEAD,PATCH",
//     allowedHeaders:
//       "Access-Control-Allow-Headers,Origin,Accept,X-Requested-With,Content-Type,Access-Control-Request-Method,Access-Control-Request-Headers",
//     credentials: true,
//   })
// );

//

// app.use(function (req, res, next) {
//   res.header(
//     "Access-Control-Allow-Origin",
//     "https://react-1flkd5rrp-shrutis-projects-226bf37e.vercel.app"
//   );
//   res.header("Access-Control-Allow-Methods", "OPTIONS, POST,GET, PUT, DELETE");
//   res.header("Cross-Origin", "True");
//   res.header("Access-Control-Allow-Headers", "Content-Type");
// });

//

// const corsOptions = {
//   origin: [
//     "http://localhost:3000/",
//     "https://react-blog-app-ixe0.onrender.com/",
//   ],
//   optionSuccessStatus: 200,
//   credentials: true,
//   "Access-Control-Allow-Origin": [
//     "http://localhost:3000/",
//     "https://react-blog-app-ixe0.onrender.com/",
//   ],
//   accessControlAllowCredentials: true,
//   accessControlAllowHeaders:
//     "Access-Control-Allow-Headers, Origin, Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers",
//   methods: "OPTIONS, POST, GET, PUT, DELETE",
//   "Content-Type": "application/json",
// };

// app.use(cors(corsOptions));

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
