const express = require('express');
let path = require("path");
const app = express();

app.get("/",function(req,res) {
  res.sendFile(path.resolve(__dirname,"index.html"));
});


app.get("/request", function(req, res){
  console.log("doing request")
  res.json({name:"hello"});
});

//below is a wrapper of http.createServer(requestHandler).listen(3000);
app.listen(3000,function() {
  console.log("started on port 3000");
});