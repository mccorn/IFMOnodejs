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
  if (request.method == 'GET') {
    console.log('GET: ' + pathname);
    if(pathname == '/') {
      pathname = './webpage/index.html';  
    } else if(pathname == '/widget.js') {
      pathname = './widget.js';
    } else {
      pathname = './webpage' + pathname;  
    }  
    if( (extname == ".gif") || (extname==".jpg") ) {
      fs.readFile(pathname, 'utf8', getFileBinary);
    } else {
      fs.readFile(pathname, 'utf8', getFile);
    }
  } else if (request.method == 'POST') {
    if (pathname == '/widget.js') {
      let dataR = makeRequest('http://localhost:3030/say/widget.js');
      console.log('dataR : ' + dataR);
      response.end(dataR);
    }
  }
  
  var extname = path.extname(pathname);
  var mimeType = mimeTypes[extname];

  console.log(request.method);
  console.log(pathname);
  
	
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
  let data;
  getrequest.post(somePath, function (error, response, body) {
    console.log('error:', error); 
    console.log('statusCode:', response && response.statusCode); 
    fs.writeFileSync('./widget.js', body, (err) => {
      if (err) throw err;
      console.log('widgetFS.js saved!');
    });
  });
}

