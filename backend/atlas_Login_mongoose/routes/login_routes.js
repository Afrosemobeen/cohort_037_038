var express = require("express");
var empOperations = require("../controllers/emp_controller");

var router = express.Router();

router.get("/users", empOperations.getUser);

router.post("/users/login", empOperations.loginChecking)

router.post("/users", empOperations.createUser);

module.exports = router;
