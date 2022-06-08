let path = require("path");
let express = require("express");
//const myDatabase = require(path.resolve(__dirname + "/public/js/myDatabase.js"));
//const Student = require(path.resolve(__dirname + "/public/js/Student.js"));

const myDatabase = require("./myDatabase");
let db = new myDatabase();

const Student = require("./Student");

//Look at below web page for info on express.Router()
//https://scotch.io/tutorials/learn-to-use-the-new-router-in-expressjs-4
let router = express.Router();
//request is info sending to server from client.
//response is info sending to client from server.

router.get("/",function(req,res){
    res.sendFile(path.resolve(__dirname + "/public/views/index.html"));  //changed
});

router.post('/create', function(req, res)
{
	let identifier = Number(req.body.identifier.trim());
    let name = req.body.name.trim();
    let grade = Number(req.body.grade.trim());
    let drives = req.body.drives;

    if (req.body.identifier == "") {
        res.json({error:true});
        return;
    }
    if (Number.isNaN(identifier)) {
        res.json({error:true});
        return;
    }

    if (name == "") {
        res.json({error:true});
        return;
    }
    let n = new Student(identifier, name, grade, drives);
    res.json({error:!(db.postStudent(n))});
});
router.get('/read', function(req, res) {

    let identifier = Number(req.query.identifier.trim());
    if (req.query.identifier == "" || Number.isNaN(identifier)) {
        res.json({error:true});
        return;
    }
    let n = db.getStudent(identifier);
    if(n == null)
    	res.json({error:true});
    else
    	res.json({error:false, name:n.name, grade:n.grade, drives:n.drives});
});
router.put('/update', function(req, res) {

    let identifier = Number(req.body.identifier.trim());
    let name = req.body.name.trim();
    let grade = Number(req.body.grade.trim());
    let drives = req.body.drives;

    if (req.body.identifier == "" || Number.isNaN(identifier) || name == "") {
        res.json({error:true});
        return;
    }

    let n = new Student(identifier, name, grade, drives);
    res.json({error:!(db.putStudent(n))});
});
router.delete('/delete/:identifier', function(req, res) {

    let identifier = Number(req.params.identifier.trim());

    if (req.params.identifier == "" || Number.isNaN(identifier)) {
        res.json({error:true});
        return;
    }

    let n = db.deleteStudent(identifier);
    if(n == null)
    	res.json({error:true});
    else
    	res.json({error:false});
});


module.exports = router;