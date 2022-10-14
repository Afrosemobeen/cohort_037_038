var express = require('express')
var mongoose = require('./db/db')
var cors = require('cors')
var app = express();
app.use(cors())
app.use(express.json());

app.get("/",function(req,res){
    console.log(req);
    res.send("welcome to Users application");
})
app.use(require('./routes/user_routes'));

app.listen(5000, function(err){
    if(err){
        console.log("got error while connecting port");
        console.log(err);
        return
    }
    if(!err){
        console.log("application is started successfully and running on port: 5000..");
    }
})


