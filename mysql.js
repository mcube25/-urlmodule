//mysql.js
//node.js can be used in database application
//download mysql
//install mysql driver
//npm install mysql
var mysql = require('mysql');
//create a connection
var mysql = require('mysql');
var con = mysql.createConnection({
  host:"localhost",
  user: "yourusername",
  password: "yourpassword"
});
con.connect(function(err){
  if(err)throw err;
  console.log("connected!")
});
