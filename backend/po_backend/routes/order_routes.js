var express = require("express");
var order_operations = require("../controllers/order_controllers");
var router = express.Router();

const { Router } = require("express");

router.get("/orders", order_operations.getAllOrders );
  
  router.post("/orders", order_operations.createOrder);
  
  router.put("/orders/:po_num", order_operations.updateOrder);
  
  module.exports = router