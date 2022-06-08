var express = require('express');
var app = express();
var base = "dec";


//request is info sending to server from client.
//response is info sending to client from server.
app.get("/",function(request,response){
	
	response.sendFile(__dirname + "/index.html");
});

app.get("/setBase", function(req,res) {
    res.sendFile(__dirname + "/Base.html");
});
app.get('/getBase', function(req, res){
	//console.log(guessnum.guessNum(req.query.index));
	//unfinished code
	
	res.json({"base":base});
	
});
app.get('/resetBase', function(req, res){
	
	base = String(req.query.base);
});

var port = process.env.PORT || 3000;

app.listen(port);