var express = require("express");
var order_operations = require("../controllers/order_controllers");
// var lookup_operations = require("../controllers/lookups_controller");



var router = express.Router();

const { Router } = require("express");

router.get("/orders", order_operations.getAllOrders);

router.post("/orders", order_operations.createOrder);

router.put("/orders/:_id", order_operations.updateOrder);


router.get("/lookups/:lookup_type", order_operations.getLookups);



module.exports = router;
