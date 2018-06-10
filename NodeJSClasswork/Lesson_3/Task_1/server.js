//let http = require('http');
//let fs = require('fs');
//
//let server = http.createServer(onResponse);
//
//function onResponse(req, res) {
//  console.log(process.argv[2]);
//  let lang = process.argv[2];
//  
//  fs.readFile(process.argv[2] + '.html' , 'utf8', function(err, data) {
//    if (err) {
//      console.error(err);
//    } else {
//      res.writeHead(200, {'Content-Type': 'text/html'});
//      res.end(data);
//    } 
//  })
//}
//
//server.listen(3030);

let http = require('http');
let fs = require('fs');

let server = http.createServer(onResponse);

function onResponse(req, res) {
  let lang = process.env.LANG || process.argv[2];
  fs.readFile(lang.substr(0, 2) + '.html' , 'utf8', function(err, data) {
    if (err) {
      console.error(err);
    } else {
      res.writeHead(200, {'Content-Type': 'text/html'});
      res.end(data);
    } 
  })
}

server.listen(3030);