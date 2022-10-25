var mongoose = require('mongoose');

// var url = "mongodb://localhost:27017/";
var url = "mongodb+srv://mongo:mongo123@cluster0.ee1jhgn.mongodb.net/headerdatabase?retryWrites=true&w=majority";



            mongoose.connect(url)
                .then(function(result){
                  console.log("Db is connected successfully ")
                })
                .catch(function(err){
                    console.log("error occured while connecting to db");
                    console.log(err);
                    return;
                })
module.exports = mongoose;