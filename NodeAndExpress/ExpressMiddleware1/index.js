var express = require("express");
var http = require("http");
var app = express();
app.use(function(req,res,next) {
  console.log("In comes a " + req.method + " to " + req.url);
  //next(); calls next app.use(); function like a function pointer
  //we need a res.end, some response. next(); works as one.
  next();
});

app.use(function(req,res) {
  res.end("Hello World");
});
http.createServer(app).listen(3000);
