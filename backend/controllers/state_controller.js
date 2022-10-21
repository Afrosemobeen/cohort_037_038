const State = require("../models/state");

exports.getStates = function (req, res) {
  console.log("I am from getStates");
  State.find().exec(function (err, result) {
    res.send(result);
  });
};
