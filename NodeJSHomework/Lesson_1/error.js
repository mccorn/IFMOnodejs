var fs = require("fs");
var http = require("http");

function send404Response (response){
    response.writeHead(302, {"Content-Type": "text/html"});
    fs.createReadStream("./error/err404.html").pipe(response);
}

function onRequest (request, response){
  switch (request.url){
    case "/index.html":
      response.writeHead(200, {"Content-Type": "text/html"});
      fs.createReadStream("./Task 3/index.html").pipe(response);
        break;
    default:
      send404Response(response);
      break;
  }
}

let server = http.createServer(onRequest);
server.listen(8000);
console.log('error.js:: Server running: 8000');
