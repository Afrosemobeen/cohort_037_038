var express = require ('express');
var cors = require('cors');
var mongoose = require('./db/db');

var app = express();
app.use(cors())
app.use(express.json());
app.get("/", function(req, res){
    console.log(req);
    res.send("Welcome to Cognizant");
})
app.use(require('./routes/login_routes'));
app.listen(5000, function (err){
    if(err){
        console.log("Got error while listening on port some changes");
        console.log(err);
        return;
    }
    if(!err){
        console.log("Application is started successfully and listening on port: 5000...");
    }
})
