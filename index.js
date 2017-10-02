//back end
var express = require('express');
var socket = require('socket.io');
//setup app
var app = express();
var server = app.listen(4000, function () {
	console.log('listening to port 4000');
});

app.use(express.static('./public'));

//set up socket
var io = socket(server);

io.on('connection', function(socket){
	console.log('connection made to'+ socket.id);

	socket.on('chat', function(data){
		io.sockets.emit('chat', data);
	});
	
	socket.on('typing', function(data){
		socket.broadcast.emit('typing', data);
	});

});