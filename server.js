
// SERVER-SIDE JAVASCRIPT

// REQUIREMENTS //
var express = require("express"),
	app = express(),
	bodyParser = require("body-parser");
	mongoose = require("mongoose");


var dotenv = require("dotenv").load();

var GMAP_KEY= process.env.GMAP_KEY;
	
var request = require("request");

mongoose.connect(
  process.env.MONGOLAB_URI ||
  process.env.MONGOHQ_URL ||
  'mongodb://localhost/demograph' // plug in the db name you've been using
);

var db = require("./models/index.js");
app.set('view engine', 'ejs');
app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));
//check posts that exist in database and render them on ejs
app.get('/', function (req, res) {
 res.render("index", {dotenv:dotenv});
});

app.post("/a", function (req, res){
	var query= req.body;
	console.log(req.body);
	db.Survey.find(query).limit(70000).exec(function(err, success){
		if(err){ return console.log("send error:", err);}
		res.json(success);
		//res.render("index", {dotenv:dotenv});
	});
});


var server = app.listen(process.env.PORT || 5000, function (){
 console.log("listening on port 5000");
});