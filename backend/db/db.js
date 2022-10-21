var mongoose = require("mongoose");
var url =
  "mongodb+srv://nandhini:nansn@cluster0.hgqctst.mongodb.net/angular_project";

mongoose
  .connect(url)
  .then(function (result) {
    console.log("DB is connected Successfully");
  })
  .catch(function (err) {
    console.log("Error occured while connecting DB");
    console.log(err);
    return;
  });

module.exports = mongoose;
