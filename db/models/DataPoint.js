var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var DataPointSchema = new Schema({
  dataNumberOne: Number,
  dataNumberTwo: Number
})

module.exports = mongoose.model("DataPoints", DataPointSchema);