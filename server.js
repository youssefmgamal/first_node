var http = require("http");

http.createServer((request, response) => {
  response.writeHead(200, {'Content-Type': 'text/html'});  
  response.write("<h1>Hello Node!!!!</h1>");
  response.end()
}).listen(3000);

