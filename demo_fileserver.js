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
//events module
var events = require('events');
var eventEmitter = new events.eventEmitter();
//the event emitter object
//to fire an event use the emit() method
var events = require('events');
var eventEmitter = new events.eventEmitter();
//create an eventhandler
var myEventHandler = function (){
  console.log('i hear a scream');
}
//assign the eventhandler to an event
eventEmitter.on('scream', myEventHandler);
eventEmitter.emit('scream');


//node.js upload file
//the formidable module
//install formidable
//npm install formidable
//include the module in any application
var formidable = require('formidable');
//create a node.js file that writes a html form with an upload field
var http = require('http');
http.createServer(function (req, res){
  res.writeHead(200, {'content-type':'text/html'});
  res.write('<form-action="fileupload" method="post" enctype="multipart/form-data">');
  res.write('<input type="file" name="filetoupload"><br>');
  res.write('<input type="submit">');
  res.write('</form>');
  return res.end();
}).listen(8080);
//save the file
var http = require('http');
var formidable = require('formidable');
var fs = require('fs');
http.createServer(function(req, res){
  if(req.url == '\fileupload'){
    var form = new formidable.IncomingForm();
    form.parse(req, function(err, fields, files){
      var oldpath = files.filetoupload.path;
      var newpath =  'C:/Users/Your Name/' + files.filetoupload.name;
      fs.rename(oldpath, newpath, function (err) {
       if (err) throw err;
       res.write('File uploaded and moved!');
       res.end();
    });
  }else {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write('<form action="fileupload" method="post" enctype="multipart/form-data">');
    res.write('<input type="file" name="filetoupload"><br>');
    res.write('<input type="submit">');
    res.write('</form>');
    return res.end();
  }
})
