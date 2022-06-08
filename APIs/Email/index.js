
const express = require('express');
let path = require("path");
const app = express();
let email = "JCMvhs27";
var nodemailer = require('nodemailer');
var bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

//let passw = process.env.email_pass;
let passw = 'nhjjfnnkvoidqzcw';


var transporter = nodemailer.createTransport({
          host: 'smtp.gmail.com',
          port: 465,
          secure: true,
  auth: {
    user: email + '@gmail.com',
    pass: passw
  }
});

var mailOptions = {
  from: email + '@gmail.com',
  to: 'jeffreyyee@vistausd.org',
  subject: 'Sending Email using Node.js',
  text: 'Jesus sent an email'
//  text: 'That was easy!\nHere is a second line.'
//  html: '<h1>Welcome</h1><p>That was easy!</p>'
};

 

app.get("/",function(req,res) {
  res.sendFile(path.resolve(__dirname,"index.html"));
});

app.get("/request", function(req, res){
    transporter.sendMail(mailOptions, function(error, info){
      if (error) {
        console.log(error);
      res.json({error:true});
      } else {
        console.log('Email sent: ' + info.response);
      res.json({error:false});   
      }
    });
});

app.listen(3000,function() {
  console.log("started on port 3000");
});