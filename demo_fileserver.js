var http = require('http');
var url = require('url');
var fs = require('fs');

http.createServer(function(req, res){
  var q = url.parse(req.url, true);
  var filename = "." + q.pathname;
  
})
