let http = require('http');
let fs = require('fs');

const fileName = 'index.html';

let server = http.createServer(function(req, res) {
  fs.readFile(fileName, 'utf8', function(err, data){
    if (err) {
      console.log("Fatal error! File not find or open");  
    } else {
      res.writeHead(200, {'Content-type' : 'text/html'});  
      res.end(data);
    }
  });
});

server.listen(8080);
console.log('Server running: 8080');
