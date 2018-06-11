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
//  http://localhost:8010/camel_to_snake?name=someStringEveryBodyDanceNow&id=12&ver=2.1.13&author=mccorn
//  http://localhost:8010/snake_to_camel?name='some_string_every_body_dance_now'


let server = http.createServer(onRequest);
server.listen('8010');

function onRequest(request, response) {
  var postData = "";
  var pathname = url.parse(request.url).path;
  if(pathname == '/')
      pathname = '/index.html';
  var extname = path.extname(pathname);
  var mimeType = mimeTypes.list[extname];
  pathname = pathname.substring(1, pathname.length);
  if (extname == '.ico') return;
  
  let obj = parseURL(pathname);
  let _get  = url.parse(request.url, true).query;
  if (obj.method && obj.name) {
    let result = '';
    if (obj.method) {
      let result = eval(`mod.${obj.method}('${obj.name}')`);
      console.log('result(response.data) = ' + result);
      response.end(result);
    }
  }
}

function parseURL(someURL) {
  let result = {};
  let arr = someURL.split('?');
  let arr2 = arr[1].split('&');
  result.method = arr[0];
  let size = arr2.length;
  for(let i = 0; i < size; i++) {
    let tmp = arr2[i].split('=');
    result[tmp[0]] = tmp[1].replace(/%27/ig, '').replace(/%22/ig, '');  
  }
  return result;
}