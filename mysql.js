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
//query a database
con.connect(function(err){
  if(err) throw err
    console.log("connected!")
  con.query(sql, function(err, result){
    if (err) throw error
    console.log("Result :" + result);
  })
})
//creating a database
//to create a database in mysql use the CREATE DATABASE STATEMENT
//example
con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
  con.query("CREATE DATABASE mydb", function (err, result) {
    if (err) throw err;
    console.log("Database created");
  });
});
