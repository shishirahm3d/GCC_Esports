var http = require('http');

http.createServer(function (req, res) {
  res.write("GCC Esports - I'm up baby!");
  res.end();
}).listen(8080);
