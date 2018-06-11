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
  var postData = "";
  var pathname = url.parse(request.url).path;
  
  if(pathname == '/') {
    pathname = './say/index.html';  
  } else {
    pathname = './say' + pathname;  
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

  
	

//  setInterval(function(){
//    let data = Date.now();
//    console.log('Date: ' + data);
//    fs.writeFile('data.json', JSON.stringify(data), (err) => {
//      if (err) throw err;
//      console.log('data.json saved!');
//    });
//  }, 5000);
}