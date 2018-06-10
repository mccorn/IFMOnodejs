let http = require('http');
let cp = require('child_process');
let helper = cp.fork(__dirname + '/door.js');

let server = http.createServer(onResponse);


function onResponse(req, res) {
  console.log('data from helper: ' + req.url);
  helper.send(req.url);
  res.end();
}

helper.on('message', function(dataByHelper) {
  console.log('data by helper: ');
  console.dir(dataByHelper);
});

server.listen(8080);