var http = require("http");
var fs = require('fs');
var url = require("url");
var path = require('path');

var mimeTypes = {
  '.js' : 'text/javascript',
  '.html' : 'text/html',
  '.css' : 'text/css' ,
  '.jpg' : 'image/jpeg',
  '.gif' : 'image/gif',
  '.ico' : 'image/x-icon',
  '.json' : 'application/json',
};

http.createServer(function onRequest(request, response) {
	
	console.log(request.method);
	
	var postData = "";
	var pathname = url.parse(request.url).path;
	if(pathname == '/')
		pathname = '/index.html';
	var extname = path.extname(pathname);
	var mimeType = mimeTypes[extname];
	//чтобы убрать начальный слэш
	pathname = './webpage/' + pathname.substring(1, pathname.length);
	console.log(pathname);
	if( (extname == ".gif") || (extname==".jpg") ) {
		var img = fs.readFileSync('./webpage/' + pathname);
		response.writeHead(200, {'Content-Type': mimeType});
		response.end(img, 'binary');
	} else if (extname == ".json") {
		fs.readFile(pathname, 'utf8', function (err, data){
			if (err) {
				console.log('Could not find or open file '+ 
				pathname + ' for reading\n');
			} else {
				setTimeout(function(){
					response.writeHead(200, {'Content-Type': 'application/json'});
					response.end(data);
				}, 5000);
			}
		});
	} else {
		fs.readFile(pathname, 'utf8', function (err, data){
			if (err) {
				console.log('Could not find or open file '+ 
				pathname + ' for reading\n');
			} else {
				response.writeHead(200, {'Content-Type': mimeType});
				response.end(data);
			}
		});
	}
	
}).listen(7000);
