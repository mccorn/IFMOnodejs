let http = require('http');
let fs = require('fs');
let url = require('url');
let path = require('path');


var mimeTypes = {
  '.js': 'text/javascript',
  '.html': 'text/html',
  '.css': 'text/css',
  '.jpg': 'image/jpeg',
  '.gif': 'image/gif',
  '.png': 'image/png',
}

let server = http.createServer(function(req, res){
  let postData = '';
  let pathname = url.parse(req.url).path;
  if (pathname == '/') pathname = 'site/index.html'; 
  else pathname = 'site/'.concat(pathname.substring(1, pathname.length));
  
  let extname = path.extname(pathname);
  let mimeType = mimeTypes[path.extname(pathname)];
  console.log(`Get req: ${pathname}`);
  console.log(`Get type: ${mimeType}`);
  
  if ((extname == '.gif')||(extname == '.jpg')||(extname == '.png')) {
    let img = fs.readFileSync('./' + pathname);
    res.writeHead(200, {'Content-Type': mimeType});
    res.end(img, 'binary');
  } else {
    fs.readFile(pathname, 'utf8', function(err, data){
      if (err) {
        console.log('Error: not file ' + pathname); 
      } else {
        console.log(pathname); 
        res.writeHead(200, {'Content-Type': mimeType});  
        res.end(data);
      }
    });  
  }  
});

server.listen('8080');
