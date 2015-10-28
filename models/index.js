var mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/demograph");


//User=require("./user");
 
var Seed = require("./seed.js");
module.exports.Seed = Seed;

var Survey = require("./surveys.js");
module.exports.Survey = Survey;




//module.exports.User = User;
