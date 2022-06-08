const request = require('request');
const express = require('express');
let path = require("path");
const app = express();

app.get("/",function(req,res) {
  res.sendFile(path.resolve(__dirname,"index.html"));
});

//var url = "https://api.census.gov/data/2020/dec/pl?get=P1_001N,NAME&for=state:06";
var url = "https://api.wheretheiss.at/v1/satellites/25544";


app.get("/request", function(req, res){
  console.log("doing request")

    request(url,  (error, response, body) => {
        if(error) {
            console.log(error)
            // If there is an error, tell the user 
            res.send('An erorr occured')
        }
        // Otherwise do something with the API data and send a response
        else {
            console.log(body);
            const obj = JSON.parse(body);
            console.log(obj);
            /*
            let resStr = "";
            for (i=0;i<obj[1].length;i++)
            {
              resStr += obj[0][i] + " " + obj[1][i] + '\n';
            }              
            console.log(resStr)
            */
//            res.send(body)
//            res.send(resStr)
            //res.json({population:obj[1][0],state:obj[1][1]})
            res.json({population:20,state:"cali"})
        }
    });
    
});

//below is a wrapper of http.createServer(requestHandler).listen(3000);
app.listen(3000,function() {
  console.log("started on port 3000");
});