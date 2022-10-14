//step1 - import library
var express = require("express");
var cors = require("cors");
//step 2 - create apllication
var app = express();

app.use(express.json());
app.use(cors());

var mongoose = require("../backend/db/db");

//step 4- developing services
app.get("/", function (req, res) {
  console.log(req);
  res.send("Welcome to orders application");
});

app.use(require("./routes/order_routes"));
//step 3- register aplication with port
app.listen(5000, function (err) {
  if (err) {
    console.log("error occurred while listening port");
    console.log(err);
    return;
  }
  if (!err) {
    console.log(
      " Purchase order Application started successfully and listening on port 5000"
    );
  }
});
