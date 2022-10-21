const Emp = require("../models/login");

exports.getUser = function (req, res) {
  console.log("from signup service");

  Emp.find().exec(function (err, result) {
    res.send(result);
  });
};

exports.createUser = function (req, res) {
  console.log("from saveemployee service");
  const { body, params, query } = req;
  console.log("body: ", body);
  console.log("params: ", params);
  console.log("query: ", query);
  const empObj = new Emp(body);
  empObj.save(function (err, result) {
    res.send(result);
  });
};
