//libs
var gen = require('./gen.js');
var http = require('http');
var fs = require('fs');

//data
var css=fs.readFileSync("style.css").toString();
/*var url = {
  ip:'127.0.0.1'
  , port:1337
};*/
var url = {};
url.ip = process.argv[2];
url.port = parseInt(process.argv[3],10);
console.log(url);
var objPage = {
  doctype:'<!doctype html>'
  , htmlTagOpen:'<html>'
  , head:'<head><title>מייצר משפטים</title><style>'+css+'</style>'
  , body:'<body dir="rtl" lang="he"><blockquote>'+gen()+'</blockquote></body>'
  , htmlTagClose:'</html>'
};
var pageHTML = objPage.doctype+objPage.htmlTagOpen+objPage.head+objPage.body+objPage.htmlTagClose;

//http
http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.end(pageHTML);
}).listen(url.port, url.ip);
console.log('Server running at http://'+url.ip+':'+url.port+'/');
