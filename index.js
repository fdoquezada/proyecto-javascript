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
/* 
var http = require('http');


http.createServer(function (request, response) {
  response.writeHead(200, {'Content-Type': 'text/plain'});
  response.end('hola fernando quezada');
}).listen(8081);

console.log('Server running at 8081'); 
 */



const express = require('express')
const app = express()

app.get('/', function (req, res) {
  res.send('hola fernando quezada')

})

app.get('/contacto', function (req, res) {
  res.send('contactame en mi red social')

})
app.listen(3000)










