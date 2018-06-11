var http = require("http");
var fs = require('fs');
var url = require("url");
var path = require('path');
//var xhr = require('xmlhttprequest');
var getrequest = require('request');


var mimeTypes = {
  '.js' : 'text/javascript',
  '.html' : 'text/html',
  '.css' : 'text/css' ,
  '.jpg' : 'image/jpeg',
  '.gif' : 'image/gif',
  '.ico' : 'image/x-icon',
  '.json' : 'application/json',
};

let server = http.createServer(function onRequest(request, response) {
  var postData = "";
  var pathname = url.parse(request.url).path;
  
  if (pathname == '/say') {
    let dataResp = makeRequest('http://localhost:3030/data.json');  
    response.end(dataResp.body);
  } else if(pathname == '/') {
    pathname = './webpage/index.html';  
  } else {
    pathname = './webpage' + pathname;  
  }
  
  var extname = path.extname(pathname);
  var mimeType = mimeTypes[extname];

  console.log(request.method);
  console.log(pathname);
  if( (extname == ".gif") || (extname==".jpg") ) {
    fs.readFile(pathname, 'utf8', getFileBinary);
  } else {
    fs.readFile(pathname, 'utf8', getFile);
  }
	
  function getFile(err, data) {
    if (err) {
      console.log('Could not find or open file '+ 
      pathname + ' for reading\n');
    } else {
      response.writeHead(200, {'Content-Type': mimeType});
      response.end(data);
    };
  };
  
  function getFileBinary(err, data) {
    var img = fs.readFileSync('' + pathname);
    response.writeHead(200, {'Content-Type': mimeType});
    response.end(img, 'binary');
  };
  
  
//  http://localhost:3030/say/script.js
}).listen(7000);

function makeRequest(somePath) {
  console.log('makeReq');  
  // (1)
  let data = getrequest(somePath, function (error, response, body) {
    console.log('error:', error); 
    console.log('statusCode:', response && response.statusCode); 
    console.log('body:', body);
    return response.body;
  });
  return data;
}

