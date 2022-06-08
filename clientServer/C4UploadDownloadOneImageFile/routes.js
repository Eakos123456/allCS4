
var express = require("express");
var router = express.Router();
var formidable = require('formidable');
var mv = require('mv');
const fs = require('fs');

fs.readdir(__dirname + '/public', function(err, files){
if (err)
  console.log(err);
  for (const i of files)
  {
    if(i.includes(".jpg"))
    {
      fs.unlink(__dirname + '/public/' + i, function(){});
    }
  }
  });

let fileName;
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
        if(fileName != "")
        {
          fs.unlink(__dirname + '/public/' + fileName, function(){
            fileName = files.filetoupload.name;
          });
        }
        console.log(files.filetoupload.name);
        res.sendFile(__dirname + "/index.html");
        res.end();
      });
    });
});
router.get("/info",function(req,res){
      res.sendFile(__dirname + "/info.html");
});

router.get('/request', function(req, res){
    res.json({'name': fileName});
});

module.exports = router;

