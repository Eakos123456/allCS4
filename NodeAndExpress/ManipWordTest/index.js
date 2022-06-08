var express = require('express');
var app = express();
var manip = "UC";


//request is info sending to server from client.
//response is info sending to client from server.
app.get("/",function(request,response){
	
	response.sendFile(__dirname + "/index.html");
});

app.get("/manip", function(req,res) {
    res.sendFile(__dirname + "/Manip.html");
});
app.get('/manipCheck', function(req, res){
	//console.log(guessnum.guessNum(req.query.index));
	//unfinished code
	res.json({"manip":manip});
	
});
app.get('/manipChange', function(req, res){
	//console.log(req.query.manip);
	manip = String(req.query.manip);
	//console.log(manip);
});
app.get("/operation", function(req, res){
	let word = String(req.query.word);
	let send = "";

	if(manip == "UC")
          send = word.toUpperCase();
        if(manip == "LC")
          send = word.toLowerCase();
        if(manip == "RV")
          {
          	RVW = word.split("");
          	RVA = RVW.reverse();
          	send = RVA.join("");
          }

	res.json({"word":send});
});

var port = process.env.PORT || 3000;

app.listen(port);