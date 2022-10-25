var mongoose = require('../db/db');
//step 1
//Create Schema
var empSchema = new mongoose.Schema({
    username: String, 
    password: String 
    
},{
    versionKey: false,
    
})

//Step 2
//Create model
var Emp = mongoose.model("users", empSchema)

module.exports = Emp;