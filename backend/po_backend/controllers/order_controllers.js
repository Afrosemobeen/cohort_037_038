const Order = require("../models/order");

exports.getAllOrders = function (req, res) {
  console.log("I am from getallorders");
  Order.find().exec(function (err, result) {
    res.send(result);
  });
};

exports.createOrder = function (req, res) {
  console.log("From create order service");
  const { body, params, query } = req; //object destructuring
  console.log("body: ", body);
  console.log("params: ", params);
  console.log("query: ", query);

  const orderObj = new Order(body);
  orderObj.save(function (err, result) {
    res.send(result);
  });
};

exports.updateOrder = function (req, res) {
  console.log("I am from updateOrder");
  const { body, params, query } = req; //object destructuring
  console.log("body: ", body);
  console.log("params: ", params);
  console.log("query: ", query);
  Order.updateOne({ _id: params._id }, body).exec(function (err, result) {
    res.send(result);
  });
};
