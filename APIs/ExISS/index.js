const request = require('request');
const express = require('express');
let path = require("path");
const app = express();

app.get("/",function(req,res) {
  res.sendFile(path.resolve(__dirname,"index.html"));
});

var url = "https://api.wheretheiss.at/v1/satellites/25544";


app.get("/request", function(req, res){
  console.log("doing request")

    request(url,  (error, response, body) => {
        if(error) {
            // If there is an error, tell the user 
            
            res.send('An erorr occured')
        }
        // Otherwise do something with the API data and send a response
        else {
            console.log(body);
            const obj = JSON.parse(body);
            console.log(obj);

            res.json({longitude:obj.longitude,latitude:obj.latitude})
        }
    });
    
});

//below is a wrapper of http.createServer(requestHandler).listen(3000);
app.listen(3000,function() {
  console.log("started on port 3000");
});
