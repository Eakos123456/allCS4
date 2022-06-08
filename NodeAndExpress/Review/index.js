var express = require('express');
var app = express();
var type = "Area";

/*
app.use((req, res, next) => {
  res.set('Cache-Control', 'no-store')
  next()
})
*/

app.use('/favicon.ico', express.static('favicon.png'));


//request is info sending to server from client.
//response is info sending to client from server.
app.get("/",function(request,response){
	
	response.sendFile(__dirname + "/Calc.html");
});

app.get("/setType", function(req,res) {
    res.sendFile(__dirname + "/Type.html");
});
app.get('/getType', function(req, res){
	//console.log(guessnum.guessNum(req.query.index));
	//unfinished code
	res.json({"type":type});
	
});
app.get('/resetType', function(req, res){
	console.log(req.query.type);
	type = String(req.query.type);
});

var port = process.env.PORT || 3000;

app.listen(port);