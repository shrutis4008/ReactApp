import mysql from "mysql2";
import mysql2 from "mysql2";

export const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "itmd504project",
  databse: "test",
  port: "3306",
});

/*
var mysql      = require('mysql');
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'me',
  password : 'secret',
  database : 'my_db'
});
 
connection.connect();
*/

// con.connext(function (err) {
//   if (err) {
//     console.log("Connection Error.");
//   } else {
//     console.log("Connected.");
//   }
// });
