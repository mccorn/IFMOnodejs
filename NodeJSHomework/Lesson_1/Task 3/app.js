let http = require('http');
let fs = require('fs');

const fileName = 'index.html';
//const errorName = 'lvahbwkyjbkjh.html';
//const errFile404 = '404.html';


let server = http.createServer(function(req, res) {
  fs.readFile(fileName, 'utf8', function(err, data){
    if (err) {
      console.log("Fatal error! File not find or open: " + err.stack);  
    } else {
      console.log(fileName);  
      res.writeHead(200, {'Content-type' : 'text/html'});  
      res.end(data);
    }
  });
});

server.listen(8080);
console.log('Server running: 8080');
