
var express = require("express");
var router = express.Router();
var formidable = require('formidable');
var mv = require('mv');

var infoList = [];
var index = 0;

router.get("/",function(req,res){
	    res.sendFile(__dirname + "/index.html");
});

router.post('/fileupload', function(req, res){
    var form = new formidable.IncomingForm();
    form.parse(req, function (err, fields, files) {
      var oldpath = files.filetoupload.path;
      var newpath = __dirname + '/public/' + files.filetoupload.name;
      mv(oldpath, newpath, function (err) {
        if (err) throw err;
        infoList[index] = {'name':files.filetoupload.name,};
        index++;
        console.log(files.filetoupload.name);
        res.write('File uploaded and moved!');
        res.end();
      });
    });
});
router.get("/info",function(req,res){
      res.sendFile(__dirname + "/info.html");
});

router.get('/request', function(req, res){
    res.json(infoList[index-1]);
});

module.exports = router;

