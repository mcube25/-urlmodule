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
//creating a table
//to create a database in mysql use the CREATE DATABASE STATEMENT
//example
var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "yourusername",
  password: "yourpassword",
  database: "mydb"
});
con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
  var sql = "CREATE TABLE customers (name VARCHAR(255), address VARCHAR(255))";
  con.query(sql, function (err, result) {
    if (err) throw err;
    console.log("Table created");
  });
});
//primary key
var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "yourusername",
  password: "yourpassword",
  database: "mydb"
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
  var sql = "CREATE TABLE customers (id INT AUTO_INCREMENT PRIMARY KEY, name VARCHAR(255), address VARCHAR(255))";
  con.query(sql, function (err, result) {
    if (err) throw err;
    console.log("Table created");
  });
});

//create primary key on existing table
var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "yourusername",
  password: "yourpassword",
  database: "mydb"
});
con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
  var sql = "ALTER TABLE customers ADD COLUMN id INT AUTO_INCREMENT PRIMARY KEY";
  con.query(sql, function (err, result) {
    if (err) throw err;
    console.log("Table altered");
  });
});
//to fill tables in MySql use the "INSERT INTO" statement
//example insert a record in the customers table
var mysql = require('mysql');
var con = mysql.createConnection({
  host: "localhost",
 user: "yourusername",
 password: "yourpassword",
 database: "mydb"
});
con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
var sql = "INSERT INTO customers (name, address) VALUES ('Company Inc', 'Highway 37')";
con.query(sql, function (err, result) {
  //insert multiple records
  var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "yourusername",
  password: "yourpassword",
  database: "mydb"
});
