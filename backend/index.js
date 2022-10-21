var express = require("express");
var mongoose = require("./db/db");
var cors = require("cors");
var app = express();
app.use(cors());

app.use(express.json());

app.get("/", function (req, res) {
  console.log(req);
  res.send("project");
});


app.use(require("./routes/lookups_routes"));

app.listen(5000, function (err) {
  if (err) {
    console.log("Got Error while listining the port");
    console.log(err);
    return;
  }
  if (!err) {
    console.log(
      "Application is started successfully and listining on port: 5000"
    );
  }
});
