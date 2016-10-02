const PORT = process.env.PORT || 8080; //This might have to change depending on host (e.g. heroku)

/********************************************************************
***** DEPENDENCIES
*********************************************************************/

const http = require('http');
const express = require('express');
const app = express();
const bodyParser = require('body-parser'); //for req parsing
const path = require('path'); //for setting res paths
const socketIO = require('socket.io');

//Configure express
app.set('port', PORT);
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname)));

//Configure socket.io (for cross-tab comms)
var server = http.createServer(app);

const io = socketIO.listen(server);
io.on('connection', function(socket) {
	console.log("Client connected");
	socket.on('next', function(){
		console.log('next');
		io.emit('next');
	});
	socket.on('previous', function(){
		io.emit('previous');
	});
	socket.on('disconnect', function(){
		console.log("Client disconnected");
	});
});

/********************************************************************
************* EXPRESS REDIRECTS
*********************************************************************/

//Start server
server.listen(PORT, function() {
	console.log('server listening on port ' + PORT)
});

//Landing page
app.get('/', function(req, res) {
  res.sendFile(__dirname + '/index.html')
});

//Controller
app.get('/controller', function(req, res) {
  res.sendFile(__dirname + '/controller.html')
});
