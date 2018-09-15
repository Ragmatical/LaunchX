var express = require('express');
var bodyParser = require('body-parser');
var Io = require('socket.io')
var http = require('http');
var crypto = require('crypto');
var path = require('path');
var passport = require('passport')
var LocalStrategy = require('passport-local').Strategy
var session = require('express-session');
var fs = require('fs')
var app = express();
var server = http.createServer(app);
var io = Io(server)
var port = process.env.PORT ? parseInt(process.env.PORT) : 8080;


function startServer() {
    app.get('/', (req, res, next) => {
      var filePath = path.join(__dirname, '/home.html')
      res.sendFile(filePath)
    })
    server.on('listening', () => {


    /* Determining what the server is listening for */
    var addr = server.address(),
      bind = typeof addr === 'string' ?
      'pipe ' + addr :
      'port ' + addr.port;

    /* Outputs to the console that the webserver is ready to start listenting to requests */
    console.log('Listening on ' + bind);
  });

  /* Tells the server to start listening to requests from defined port */
    server.listen(port);
  }

startServer()
