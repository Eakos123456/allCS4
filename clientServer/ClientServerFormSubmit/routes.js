let path = require("path");
let express = require("express");

//Look at below web page for info on express.Router()
//https://scotch.io/tutorials/learn-to-use-the-new-router-in-expressjs-4
let router = express.Router();
const dataBase = [];
//request is info sending to server from client.
//response is info sending to client from server.

router.get("/",function(req,res){
    res.sendFile(path.resolve(__dirname + "/public/views/index.html"));  //changed
});

 

router.post('/create', function(req, res){

    let identifier = Number(req.body.identifier.trim());
    let name = req.body.name.trim();
//    let identifier = Number("aString");
//    console.log(identifier);
//    console.log(typeof identifier);
//    if (Number.isNaN(identifier))
//        console.log("is nan");
//    else
//        console.log("not nan");

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
    if(checkInvalidId(identifier))
    {
        res.json({error:true});
        return;
    }
    let n = new idNameSet(identifier, name);
    dataBase.push(n)
    console.log("id = " + identifier);
    console.log("name = " + name);
    res.json({error:false});
    //for (let i of dataBase)
    //    console.log(i);
});
function checkInvalidId(id)
{
    for (let i of dataBase)
        if(i.id == id)
            return true
        return false;
}
function getNamebyId(id)
{
    for (let i of dataBase)
        if(i.id == id)
            return i.name
    return("error");
}
function idNameSet(id, name)
{
    this.id = id;
    this.name = name;
}
router.get('/read', function(req, res) {

    let identifier = Number(req.query.identifier.trim());
    if (req.query.identifier == "" || Number.isNaN(identifier)) {
        res.json({error:true});
        return;
    }
    if(!(checkInvalidId(identifier)))
    {
        res.json({error:true});
        return;
    }

    res.json({error:false, name:getNamebyId(identifier)});
});



module.exports = router;