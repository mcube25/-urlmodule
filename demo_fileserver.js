var http = require('http');
var url = require('url');
var fs = require('fs');

http.createServer(function(req, res){
  var q = url.parse(req.url, true);
  var filename = "." + q.pathname;
  fs.readFile(filename, function (err, data){
    if (err){
      res.writeHead(404, {'content-type':'text/html'});
      return res.end(404, 'Not found');

    }
    res.writeHead(200, {'content-type':'text/html'});
    res.write(data);
    return res.end();
  });
});
  listen(8080);
  //node npm package
  var http = require('http');
  var uc = require('upper-case');
http.createServer(function(req, res){
  res.writeHead(200, {'content-type':'text/html'});
  res.write(uc.upperCase('hallo world'));
  res.end();
}).listen(8080);
//events in node js
var fs = require('fs');
var rs = fs.createreadstream('./demofile.txt');
rs.on('open' function(){
  console.log('the file is opoen')
});
