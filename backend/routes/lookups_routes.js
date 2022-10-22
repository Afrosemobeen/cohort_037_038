var express = require("express");
var lookup_operations = require("../controllers/lookups_controller");
var router = express.Router();

router.get("/lookups/:lookup_type", lookup_operations.getLookups);

module.exports = router;
