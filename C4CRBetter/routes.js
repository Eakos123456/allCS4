
var express = require("express");
var router = express.Router();
var formidable = require('formidable');
var mv = require('mv');

var lastName;
var lastText;
var numText = 0;

router.get("/",function(req,res){
	    res.sendFile(__dirname + "/public/views/index.html");
});

router.post('/uploadText', function(req, res){
    let text = req.body.text.trim();
    let name = req.body.name.trim();
//    let identifier = Number("aString");
//    console.log(identifier);
//    console.log(typeof identifier);
//    if (Number.isNaN(identifier))
//        console.log("is nan");
//    else
//        console.log("not nan");

    if (req.body.name == "" && req.body.text == "") {
        res.json({error:true});
        return;
    }
    if (name == "") {
        res.json({error:true});
        return;
    }
    lastName = name;
    lastText = text;
    numText++;
    console.log("name = " + name);
    console.log("text = " + lastText);
    res.json({error:false});
});

router.get('/request', function(req, res){
    if(lastName != "" && lastText != "")
        res.json({'name':lastName, 'text':lastText, "num":numText});
});

module.exports = router;

