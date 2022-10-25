const Emp = require("../models/login");

exports.getUser = function(req, res){
  console.log("from getAllEmployees service");
 
  Emp.find().exec(function(err, result){
      res.send(result);
  })
}
exports.loginChecking = function(req, res){
  console.log("from loginchecking service");
  const {body, params, query} = req;
  console.log("body: ", body);
  console.log("params: ", params);
  console.log("query: ", query);
  console.log("body: ", body.email, body.password)
  Emp.find().where({
      username: body.email,
      password: body.password
  }).exec(function(err, result){
      console.log("result : ", result);
      res.send(result);
  })
}
exports.createUser = function(req, res){
  console.log("from saveemployee service");
  const {body, params, query} = req;
  console.log("body: ", body);
  console.log("params: ", params);
  console.log("query: ", query);
  console.log("body: ", body.username, body.password);
  Emp.find().where({
      username: body.username,
      password: body.password
  }).exec(function(err, result){
      console.log("result : ", result);
      //res.send(result);
      if(result.length==0){
          const empObj = new Emp(body);
          empObj.save(function(err, result){
              res.send(result);
          })
      }
      else{
          res.send({status: "failed", errMessage: "User already exists"})
      }
  })
 
  

}