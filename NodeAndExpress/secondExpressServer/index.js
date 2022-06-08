var express = require('express');
var http = require('http');

var app = express();

app.use(function(req,res) {
console.log("In comes a request to " + req.url);
res.end("Hello Web Programming Class");
});

//http.createServer(app).listen(3000);
app.listen(3000, function() {
console.log("started on port 3000");
});