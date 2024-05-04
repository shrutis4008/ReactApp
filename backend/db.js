import mysql from "mysql2";
import mysql2 from "mysql2";

export const db = mysql.createConnection({
  host: "localhost", 
  port: "8889",
  user: "root",    
  password: "root",   
  database: "userdata",
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
