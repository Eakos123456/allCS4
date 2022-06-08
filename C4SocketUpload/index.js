let express = require('express');
let bodyParser = require('body-parser');
let routes = require("./routes");
let fs = require("fs");


let app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(routes);
app.use(express.static('./fileFolder'));

let http = require('http');
let dataBase=[];
let numPng=0;


fs.readdir(__dirname + '/fileFolder', function(err, files){
if (err)
  console.log(err);
  for (const i of files)
  {
    if(i.includes(".png"))
    {
    	numPng++;
    //fs.unlink will delete specified files
      //fs.unlink(__dirname + '/fileFolder/' + i, function(){});
    }
  }
  console.log(numPng);
});

/**
 * Create HTTP server.
 */
let server = http.createServer(app);
////////////////////////////////
// Socket.io server listens to our app
let io = require('socket.io').listen(server);

io.on('connection', function(socket) {
	console.log("user connection")
	//sends imageName + text on server(fileFolder)
	socket.emit('dataBase', dataBase);



	socket.on('base64file', function (data1, name) {
	const buffer = Buffer.from(data1, 'base64');
	console.log(buffer);
	//will create img each will be numerically named, img0, img1...
	fs.writeFile('./fileFolder/img'+numPng+'.png', buffer, function (err) {
	if (err) throw err;
	dataBase.push(new data('img'+numPng+'.png',name));
	/*
	//writing database to JSON file to save 
	const jsonContent = JSON.stringify(dataBase);
	
	
	console.log('saved png');
	});
	fs.writeFile("./fileFolder/dataBase.json", jsonContent, 'utf8', function (err) {
    	if (err) 
    	{
        	return console.log(err);
		}
		}); 
		*/
	});
});
function data(fileName,name) {
    this.fileName = fileName;
    this.name = name;
}

let port = process.env.PORT || 3000;

server.listen(port);