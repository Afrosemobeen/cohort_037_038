var mongoose = require('mongoose');
var url = "mongodb+srv://Sujitha:suji@cohort-037-038.z9wlndn.mongodb.net/login_db";

mongoose.connect(url)
  .then(function(result){
    console.log("DB is connected successfully");
  })
  .catch(function(err){
    console.log("Error occured while connecting DB");
    console.log(err);
    return;
  })

  module.exports = mongoose;