var express = require('express');
var mongoose = require('./dbs/navdb');
var app = express();
const cors = require("cors");

app.use(cors());
app.use(express.json())
app.get("/", function(req, res){
    console.log(req);
    res.send("navbar operations.")
})
app.use(require('./routes/nav_routes'));

app.listen(5000, function(err){
    if(err){
        console.log("got error while starting application.");
        console.log(err);
        return;
    }
    if(!err){
        console.log("application is started successfully, running on port 5000");
    }
})