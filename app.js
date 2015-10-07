// Requires \\
var express = require('express');
var bodyParser = require('body-parser');

// Create Express App Object \\
var app = express();

// Application Configuration \\
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(__dirname + '/public'));

// Routes \\
app.get('/', function(req, res){
  res.sendFile("Seville.html", {root: "./public"})
});

// app.get('/Canary_islands', function(req, res){
//   res.sendFile("Canary_islands.html", {root: "./public"})
// });

// app.get('/Cape_verde', function(req, res){
//   res.sendFile("Cape_verde.html", {root: "./public"})
// });

// app.get('/Straight_magellan', function(req, res){
//   res.sendFile("Straight_magellan.html", {root: "./public"})
// });

// app.get('/Guam', function(req, res){
//   res.sendFile("Guam.html", {root: "./public"})
// });
// app.get('/Philippines', function(req, res){
//   res.sendFile("Philippines.html", {root: "./public"})
// });

var locations = ["Seville","Canary_islands", "StoC", "CantCape", "Cape_verde", "straight_magellan", "Guam", "Philippines"];

app.get('/:location', function(req, res, next){
	var found = false;
	for(var i=0; i<8; i++){
		console.log(req.params.location)
		if (req.params.location == locations[i]){
			found = true;
			res.sendFile(req.params.location + ".html", {root: "./public"});			
		}
	}
	if(!found){
	next();
  	}
});

app.get("/:locations", function(req, res){
res.send("You're and idiot")

})

// Creating Server and Listening for Connections \\
var port = 3000
app.listen(port, function(){
  console.log('Server running on port ' + port);

})