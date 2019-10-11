// Set up MySQL connection.
var mysql = require("mysql");
var connection;

if (process.env.JAWSDB_URL){
    connection = mysql.createConnection(process.env.JAWSDB_URL);
} else{
  connection = mysql.createConnection({
  port: 3306,
  host: "sp6xl8zoyvbumaa2.cbetxkdyhwsb.us-east-1.rds.amazonaws.com	",
  user: "rmymptmscrcrskhe",
  password: "r0o7mey6r89g1wfx",
  database: "s87zo1020zh7bkuh"
});
};

// Make connection.
connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});


module.exports = connection;