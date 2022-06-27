//comandos para instalar nodejs 

  
/* 
var http = require('http');


http.createServer(function (request, response) {
  response.writeHead(200, {'Content-Type': 'text/plain'});
  response.end('hola fernando quezada');
}).listen(8081);

console.log('Server running at 8081'); 
 */



const express = require('express');
const path = require('path');
const app = express();


app.get('/', function (req, res) {
  //res.send('hola fernando quezada')
  res.sendFile(path.join(__dirname + "/index.html"));

})

app.get('/contacto', function (req, res) {
  //res.send('contactame en mi red social');
  res.sendFile(path.join(__dirname + "/index.html"));

})
app.listen(3000,() => {
  console.log('servert init in port', 3000 );
});










