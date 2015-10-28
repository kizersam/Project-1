var mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/demograph");

var Survey = require("./surveys.js");
module.exports.Survey = Survey;

var fs = require("fs");
var obj = JSON.parse(fs.readFileSync("SANFRANSUR.json", "utf8"));

obj.forEach(function(val,index){
	Survey.create(val, function(err, newSurvey){});
});

Survey.find({SERIALNO:53},function(err,found){
	console.log(found);
});


// var Seed = mongoose.model("Seed");
// module.exports = Seed;
