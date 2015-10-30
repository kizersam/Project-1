var mongoose = require("mongoose");
//mongoose.connect("mongodb://localhost/demograph");



 
var Seed = require("./seed.js");
module.exports.Seed = Seed;

var Survey = require("./surveys.js");
module.exports.Survey = Survey;




//User=require("./user");
//module.exports.User = User;
