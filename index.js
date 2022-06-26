//comandos para instalar nodejs 
/*1. Instalar NodeJS

sudo apt-get update
sudo apt-get install node
sudo apt-get install nodejs

2. Verificar la versión de nodejs e ingresar a la consola

nodejs -v
nodejs 
3. Instalar NPM (Node Package Manager)

sudo apt-get install npm

4. Instalar express para todos los usuarios del sistema

sudo npm install -g express */

var http = require('http');
var color= require('color');

http.createServer(function (request, response) {
  response.writeHead(200, {'Content-Type': 'text/plain'});
  response.end('Hello World');
}).listen(8081);

console.log('Server running at http://127.0.0.1:8081/'.red);
