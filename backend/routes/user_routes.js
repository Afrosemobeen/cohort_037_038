var express = require('express');
var empOperations = require('../controllers/user_controller')
var router = express.Router()

//To get all employees
router.get("/users",empOperations.getAllEmployees)

//To get employee by id
router.get("/users/:_id",empOperations.getEmployeeById)

//To create an employee
router.post("/users",empOperations.createEmployee)

//To update an employee
router.put("/users/:_id", empOperations.updateEmployee)

//To update an employee using patch data
//router.patch("/employees/:_id", empOperations.updateEmployeeByPatch)

//To delete an employee
router.delete("/users/:_id", empOperations.deleteEmployee)

module.exports = router;