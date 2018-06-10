let http = require('http');
let fs = require('fs');
var url = require("url");
var path = require('path');

// localhost:8080
// localhost:3030

const mimeTypes = {
  '.js' : "text/javascript",
  '.html' : "text/html",
  '.css' : "text/css",
  '.jpg' : "image/jpeg",
  '.gif' : "image/gif",
  '.ico' : "image/x-icon",
  '.json' : "application/json"
}


let server = http.createServer(onResponse);
server.listen(3030);

function onResponse(request, response) {
  console.log(3030 + ' started!');
  console.log(request.url);
  
  console.log(request.method);
	
	var postData = "";
	var pathname = url.parse(request.url).path;
	if(pathname == '/')
		pathname = '/say/index.html';
	var extname = path.extname(pathname);
	var mimeType = mimeTypes[extname];
	//чтобы убрать начальный слэш
	pathname = pathname.substring(1, pathname.length);
	
	if( (extname == ".gif") || (extname==".jpg") ) {
		var img = fs.readFileSync('./' + pathname);
		response.writeHead(200, {'Content-Type': mimeType});
		response.end(img, 'binary');
	} else if (extname == ".json") {
		fs.readFile(pathname, 'utf8', function (err, data){
			if (err) {
				console.log('Could not find or open file '+ 
				pathname + ' for reading\n');
			} else {
				response.writeHead(200, {
                  'Content-Type': 'application/json',
                  'Access-Control-Allow-Origin': '*'});
				response.end(data);
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

//  setInterval(function(){
//    let data = Date.now();
//    console.log('Date: ' + data);
//    fs.writeFile('data.json', JSON.stringify(data), (err) => {
//      if (err) throw err;
//      console.log('data.json saved!');
//    });
//  }, 5000);
}