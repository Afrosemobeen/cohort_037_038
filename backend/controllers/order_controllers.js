const Order = require("../models/order");

exports.getLookups =  function(req,res){
  console.log("from getlookups service");
  const {body, params, query} = req
  console.log("body: ", body);
  console.log("params: ", params);
  console.log("query: ", query);
  Lookup.find().where({lookup_type: params.lookup_type}).exec(function(err,result){
  res.send(result);
 });
};




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
