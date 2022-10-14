const Emp = require('../models/users_model');
//const { param } = require('../routes/emp_routes');

exports.getAllEmployees =  function(req,res){
    console.log("from getallemployees service");
   Emp.find().exec(function(err,result){
    res.send(result);
   })
}

exports.getEmployeeById = function(req,res){
    console.log("from getemployeesbyid service");
    const {body, params, query} = req
    console.log("body: ", body);
    console.log("params: ", params);
    console.log("query: ", query);
    Emp.findById(params._id).exec(function(err,result){
      res.send(result);
    })
    
}

exports.createEmployee = function(req,res){
    console.log("from saveemployee service");
    const {body, params, query} = req
    console.log("body: ", body);
    console.log("params: ", params);
    console.log("query: ", query);

    const empObj = new Emp(body);
    empObj.save(function(err,result){
      res.send(result);
    })
}

exports.updateEmployee = function(req,res){
    console.log("from updateemployeebyid service");
    const {body, params, query} = req
    console.log("body: ", body);
    console.log("params: ", params);
    console.log("query: ", query);

    Emp.updateOne({_id: params._id}, body).exec(function(err,result){
      res.send(result)
    })
    
}


exports.deleteEmployee = function(req,res){
    console.log("from deleteemployeesbyid service");
    const {body, params, query} = req
    console.log("body: ", body);
    console.log("params: ", params);
    console.log("query: ", query);

    //employeeList = employeeList.filter(emp=>emp.empno != params.empno)
    Emp.deleteOne({_id: params._id}).exec(function(err, result){
      res.send(result)
    })
    //res.send(employeeList)
}
