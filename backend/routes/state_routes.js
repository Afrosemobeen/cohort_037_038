var express = require("express");
var state_operations = require("../controllers/state_controller");
var router = express.Router();

const { Router } = require("express");

router.get("/lookups", state_operations.getStates);

//router.get("/lookups/ponumber", state_operations.getStates);

module.exports = router;
