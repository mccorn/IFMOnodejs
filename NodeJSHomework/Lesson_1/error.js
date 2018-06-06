let http = require('http');
let fs = require('fs');

const fileName = 'error/err404.html';
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

server.listen(8000);
console.log('error.js:: Server running: 8000');
