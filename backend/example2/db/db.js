//step1
//import library

var mongoose = require('mongoose');
//step 2
//connecting db
var url = "mongodb+srv://Mobeen:AfroseMobeen@cluster0.whxemja.mongodb.net/project?retryWrites=true&w=majority";


mongoose.connect(url)
        .then(function(result){
          
            console.log("db connected successfully..")
          })
        .catch(function(err){
          console.log("error occured while connecting db");
            console.log(err);
            return;
        })
module.exports = mongoose;






