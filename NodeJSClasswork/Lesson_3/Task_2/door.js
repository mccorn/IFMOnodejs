let url = require('url');

process.on('message', function(data) {
  let _get = url.parse(data, true).query;
  process.send(_get);
});