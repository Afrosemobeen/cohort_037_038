var express = require('express');
var headerOperations = require('../controller/nav_controller')
// var userOperations = require('../controller/emp_controller')
var router = express.Router();

// get all employees 
router.get("/navlist",headerOperations.getnavlist)
router.get("/navlistfornavedit",headerOperations.getnavlistfornavedit)
router.get("/userdataforheader",headerOperations.userdataforheader)
router.put("/navedit",headerOperations.updatenavlist)

module.exports = router;