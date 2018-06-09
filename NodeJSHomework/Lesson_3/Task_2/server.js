var http = require("http");
var fs = require('fs');
var url = require("url");
var path = require('path');
let mod = require('./script.js');

var mimeTypes = require('./mt.js');

//let str = mod.camel_to_snake('someStringEveryBodyDanceNow');
//let str2 = mod.snake_to_camel('some_string_every_body_dance_now');
//console.log(str);
//console.log(str2);

let server = http.createServer(onRequest);
server.listen('8010');

function onRequest(request, response) {
  var postData = "";
  var pathname = url.parse(request.url).path;
  console.log(pathname);
  if(pathname == '/')
      pathname = '/index.html';
  var extname = path.extname(pathname);
  var mimeType = mimeTypes.list[extname];
  pathname = pathname.substring(1, pathname.length);
  console.log(pathname);
  console.dir(parseURL(pathname));
  
  let obj = parseURL(pathname)
  if (obj.method && obj.name) {
    let res = '';
    switch (obj.method) {
      case 'camel_to_snake': {
        res = mod.camel_to_snake(obj.name); 
        break;
      } 
      case 'snake_to_camel': {
        res = mod.snake_to_camel(obj.name);
        break;
      }
      default: {
        let err = new Error(obj.method + " defined! =(");
        throw err;
      }
    }
    console.log('res = ' + res);
  }
  
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
}

function parseURL(someURL) {
  let result = {};
  let arr = someURL.split('?');
  let arr2 = arr[1].split('&');
  result.method = arr[0];
  let size = arr2.length;
//  console.log('arr2 = ' + arr2);
  for(let i = 0; i < size; i++) {
    let tmp = arr2[i].split('=');
//    console.log('tmp: ' + tmp);
    result[tmp[0]] = tmp[1].replace(/%27/ig, '');  
  }
  return result;
}