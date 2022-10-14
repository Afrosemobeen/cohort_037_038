var mongoose = require("mongoose");
var cors = require("cors");

var url = "mongodb://localhost:27017/purchase_db";

mongoose
  .connect(url)
  .then(function (result) {
    console.log(" Db Connection successfull.");
  })
  .catch(function (err) {
    console.log("error occurred while connect db");
    console.log(err);
    return;
  });

module.exports = mongoose;
