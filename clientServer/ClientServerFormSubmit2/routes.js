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
function checkInvalidName(name)
{
    for (let i of dataBase)
        if(i.name == name)
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
function updateNamebyId(id, name)
{
    for (let i of dataBase)
        if(i.id == id)
            i.name = name;
}
function deleteById(id)
{
    let n = 0;
    for (let i of dataBase)
    {
        //splice(), first parameter is index second is how many after are deleted
        if(i.id == id)
            dataBase.splice(n,1);
        n++
    }

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
router.put('/update', function(req, res) {

    let identifier = Number(req.body.identifier.trim());
    let name = req.body.name.trim();

    if (req.body.identifier == "" || Number.isNaN(identifier) || name == "") {
        res.json({error:true});
        return;
    }
    if(!(checkInvalidId(identifier)))
    {
        res.json({error:true});
        return;
    }
    updateNamebyId(identifier, name);
    res.json({error:false});
});
/*
router.delete('/delete', function(req, res) {

    let identifier = Number(req.body.identifier.trim());

    if (req.body.identifier == "" || Number.isNaN(identifier)) {
        res.json({error:true});
        return;
    }
    if(!(checkInvalidId(identifier)))
    {
        res.json({error:true});
        return;
    }
    deleteById(identifier);
    res.json({error:false});
});
*/
router.delete('/delete/:identifier', function(req, res) {

    let identifier = Number(req.params.identifier.trim());

    if (req.params.identifier == "" || Number.isNaN(identifier)) {
        res.json({error:true});
        return;
    }
    if(!(checkInvalidId(identifier)))
    {
        res.json({error:true});
        return;
    }
    deleteById(identifier);
    res.json({error:false});
});


module.exports = router;