var express = require('express');
var bodyParser = require('body-parser');

var mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/data");

var routes = require("./routes");

var app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use('/js', express.static('./public/js'));
app.use(routes);

var port = process.env.PORT || 3000;
app.listen(port);