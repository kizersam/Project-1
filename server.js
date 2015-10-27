
// SERVER-SIDE JAVASCRIPT

// REQUIREMENTS //
var express = require("express"),
   app = express(),
   bodyParser = require("body-parser");
   var mongoose = require("mongoose");

mongoose.connect(
  process.env.MONGOLAB_URI ||
  process.env.MONGOHQ_URL ||
  'mongodb://localhost/demograph' // plug in the db name you've been using
);

// var db = require("./models/user.js");
app.set('view engine', 'ejs');
app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));
//check posts that exist in database and render them on ejs
app.get('/', function (req, res) {
 res.render("index");
});



var server = app.listen(process.env.PORT || 5000, function (){
 console.log("listening on port 5000");
});