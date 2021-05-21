var express = require('express');
var app = express();
var server = app.listen(3000);

app.use(express.static('public'));

console.log("My socket server is running");

var socket = require('socket.io');
var io = socket(server);

io.sockets.on('connection', newConnection);

function newConnection(socket){
  console.log("New connection: " + socket.id);

  socket.on('heart', heartReceived);

  function heartReceived(data){
  	socket.broadcast.emit('heart', data);
  	console.log(data);
  }

  socket.on('clap', clapReceived);

  function clapReceived(data){
  	socket.broadcast.emit('clap', data);
  	console.log(data);
  }
}