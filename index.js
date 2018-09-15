var express = require('express');
var bodyParser = require('body-parser');
var Io = require('socket.io')
var http = require('http');
<<<<<<< HEAD
var crypto = require('crypto');
=======
var usermodel = require('./user.js').getModel();
var crypto = require('crypto');
var mongoose = require('mongoose')
>>>>>>> acb0cff3ca1555d803081cd73393f6f77d4a64af
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
}

startServer()
