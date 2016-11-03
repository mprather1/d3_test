var express = require("express"),
    app = express(),
    bodyParser = require("body-parser"),
    DataPoint = require("./db/models/DataPoint"),
    mongoose = require("mongoose");
    
mongoose.connect("mongodb://localhost/d3_test", function(err, res){
  if(err){
    console.log("Err: " + err)
  } else {
    console.log("Connected to database...")
  }
});

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json());

var router = express.Router()

router.use(function(req, res, next){
  console.log("Loading..."),
  next();
});

router.route("/data")
  .get(function(req, res){
    DataPoint.find(function(err, response){
      if(err){
        res.send(err);
        console.log(err)
      } else {
        res.send(response)
      }
    })
  })
  
app.use('/api', router)

var server = app.listen(8000, function(){
  console.log("Listening on port 8000....")
});

module.exports = server;