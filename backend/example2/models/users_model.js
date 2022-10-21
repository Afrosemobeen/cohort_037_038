
//import mongoose
var mongoose = require('../db/db')

//step1
//create Schema
var empSchema = new mongoose.Schema({
    fullName:String,
    displayName:String,
    title:String,
    userLevel:String,
    email:String,
    phoneNo:String,
    status:String,
},{
    versionKey: false,
})
//step2
//create model

var Emp = mongoose.model("users", empSchema)

module.exports = Emp;