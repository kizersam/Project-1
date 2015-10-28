var mongoose = require("mongoose");

var Schema = mongoose.Schema;

var survey = new Schema({
	STATE: String,
	PUMA: Number,
	LAT: Number,
	LONG: Number,
	SERIALNO: Number,
	AGE: Number,
	LANGUAGE: String,
	INCOME: Number,
	RENT: Number,
	HEDIS: String,
	VISDIS: String,
	HEALTH: String,
	MARITAL: String,
	WEIGHT: Number,
	RACE: String,
	SEX: String,
	BIRTH: String,
	HOURS: Number,
	LASTWORKED: String,
	STAMPS: String,
	CHILDPRES: String,
	SAMESEX: String,
	HHEMPLOY: String,
	CITIZ: String,
	EMPCLASS: String,
	PHYSDIS: String,
	ENGLISH: String,
	RECBIRTH: String,
	TIME: String,
	TRANSPORT: String,
	MILIT: String,
	LAYOFF: String,
	LOOKING: String,
	EDUC: String
});

var Survey = mongoose.model("Survey", survey);
module.exports = Survey;