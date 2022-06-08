var express = require('express');
const randommine = require('./randomMine');
const guessnum = require('./guessNum');
var app = express();
var bodyParser = require('body-parser'); //needed for post req
//var path = require("path");

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

var minVal = 0;
var maxVal = 10;
//request is info sending to server from client.
//response is info sending to client from server.
app.get("/",function(request,response){
	guessnum.storeNum(parseInt(minVal),parseInt(maxVal));
	response.sendFile(__dirname + "/index.html");
});

app.get('/request', function(req, res){
	//console.log(guessnum.guessNum(req.query.index));
	res.json({answer:guessnum.guessNum(req.query.index)});
	//{numTries:guessnum.guessnum()}
});

app.get("/minmax", function(req,res) {
    res.sendFile(__dirname + "/minMax.html");
});
app.get('/getminMax', function(req, res){
	//console.log(guessnum.guessNum(req.query.index));
	//unfinished code
	//guessnum.storeNum(parseInt(minVal),parseInt(maxVal));
	res.json({min:minVal,max:maxVal});
	
});

app.post('/resetMinMax', function(req, res){
	minVal = req.body.minV;
	maxVal = req.body.maxV;
	console.log("in changeminmax " + minVal + " " + maxVal);
	guessnum.storeNum(minVal,maxVal);
	res.json({});

});

/*
app.get('/resetMinMax', function(req, res){
	//console.log(guessnum.guessNum(req.query.index));
	//console.log(req.query.min + " " + req.query.max);
	minVal = req.query.min;
	maxVal = req.query.max;
});
*/

var port = process.env.PORT || 3000;

app.listen(port);