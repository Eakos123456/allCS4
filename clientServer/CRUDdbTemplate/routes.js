let path = require("path");
let express = require("express");
var formidable = require("formidable");
var mv = require('mv');

//Look at below web page for info on express.Router()
//https://scotch.io/tutorials/learn-to-use-the-new-router-in-expressjs-4
let router = express.Router();

//request is info sending to server from client.
//response is info sending to client from server.

router.get("/",function(req,res){
    res.sendFile(path.resolve(__dirname + "/public/views/index.html"));  //changed
});


const myDatabase = require('./myDatabase');
let db = new myDatabase();

const Data = require('./Data');


router.post('/fileupload', function(req, res){
    var form = new formidable.IncomingForm();
    form.parse(req, function (err, fields, files) {
      var oldpath = files.filetoupload.path;
      let Nval = files.filetoupload.name.replace("C:\\fakepath\\", "");
      var newpath = __dirname + '/public/images/' + Nval;
      mv(oldpath, newpath, function (err) {
        if (err) throw err;
        console.log(Nval);
        res.write('File uploaded and moved!');
        res.end();
      });
    });
});
router.get("/info",function(req,res){
      res.sendFile(__dirname + "/info.html");
});

router.post('/create', function(req, res){

    let trimIdentifier = req.body.identifier.trim();
    let type = req.body.type.trim();
    let rating = Number(req.body.rating);
    let file = req.body.file;

    if (trimIdentifier == "") {
        res.json({error:true});
        return;
    }

    let identifier = Number(trimIdentifier);
    if (Number.isNaN(identifier)) {
        res.json({error:true});
        return;
    }

    let name = req.body.name.trim();
    if (name == "") {
        res.json({error:true});
        return;
    }

    let obj = new Data(identifier,name,type,rating,file);
    let val = db.postData(obj);
    if (val)
        res.json({error:false});
    else
        res.json({error:true});

});

router.get('/read', function(req, res){
    let trimIdentifier = req.query.identifier.trim();
    if (trimIdentifier == "") {
        res.json({error:true});
        return;
    }

    let identifier = Number(trimIdentifier);
    if (Number.isNaN(identifier)) {
        res.json({error:true});
        return;
    }

    let val = db.getData(identifier);

    if (val == null)
        res.json({error:true});
    else
    {
        res.json({error:false,name:val.name,type:val.type,rating:val.rating,'file':val.file });
    }


});

router.put('/update', function(req, res){

    let trimIdentifier = req.body.identifier.trim();
    let type = req.body.type.trim();
    let rating = Number(req.body.rating);
    let file = req.body.file;

    if (trimIdentifier == "") {
        res.json({error:true});
        return;
    }

    let identifier = Number(trimIdentifier);
    if (Number.isNaN(identifier)) {
        res.json({error:true});
        return;
    }

    let name = req.body.name.trim();
    if (name == "") {
        res.json({error:true});
        return;
    }

    let obj = new Data(identifier,name,type,rating,file);
    let val = db.putData(obj);
    if (val)
        res.json({error:false,'file':file});
    else
        res.json({error:true});
 

});

router.delete('/delete/:identifier', function(req, res){
    let trimIdentifier = req.params.identifier.trim();
    if (trimIdentifier == "") {
        res.json({error:true});
        return;
    }

    let identifier = Number(trimIdentifier);
    if (Number.isNaN(identifier)) {
        res.json({error:true});
        return;
    }

    let val = db.deleteData(identifier);
    if (val == null)
        res.json({error:true});
    else
        res.json({error:false});

});


module.exports = router;