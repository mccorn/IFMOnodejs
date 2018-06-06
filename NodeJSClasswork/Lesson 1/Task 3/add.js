let http = require('http');
let fs = require('fs');

const fileNames =  ['header.html', 'content.html', 'footer.html'];

let server = http.createServer(function(req, res) {
 
  fs.readFile(fileNames[0], 'utf8', function(err, data){
    if (err) {
      console.log("Fatal error! File not find or open");  
    } else {
      res.writeHead(200, {'Content-type' : 'text/html'});
      res.write(data);
      fs.readFile(fileNames[1], 'utf8', function(err, data2){
        if (err) {
          console.log("Fatal error! File not find or open");  
        } else {
          res.write(data2);
          fs.readFile(fileNames[2], 'utf8', function(err, data3){
            if (err) {
              console.log("Fatal error! File not find or open");  
            } else {

              res.end(data3);
            }
          }); 
        }
      });  
    }
  });  

});
server.listen(8080);
console.log('Server running: 8080');