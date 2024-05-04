import mysql from "mysql2";
import mysql2 from "mysql2";

export const db = mysql.createConnection({
  host: "localhost", 
  port: "8889",
  user: "root",    
  password: "root",   
  database: "userdata",
});


// connection.connect();


// con.connext(function (err) {
//   if (err) {
//     console.log("Connection Error.");
//   } else {
//     console.log("Connected.");
//   }
// });
