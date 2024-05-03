import mysql from "mysql";

export const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  passowrd: "itmd504project",
  databse: "test",
});

con.connext(function (err) {
  if (err) {
    console.log("Connection Error.");
  } else {
    console.log("Connected.");
  }
});
