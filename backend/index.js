//step1 - import library
var express = require("express");

//step 2 - create apllication
var app = express();

app.use(express.json());

//step 4- developing services
app.get("/", function (req, res) {
  console.log(req);
  res.send("Welcome to orders application");
});

app.get("/getallorders", function (req, res) {
  console.log("I am from getallorders");
  res.send(orderList);
});

app.post("/createorder", function (req, res) {
  console.log("From create order service");

  // console.log(req);
  const { body, params, query } = req; //object destructuring
  console.log("body: ", body);
  console.log("params: ", params);
  console.log("query: ", query);
  let orderNoList = orderList.map((order) => order.po_num);
  let maxNo = 0;
  if (orderNoList.length === 0) {
    maxNo = 100;
  } else {
    maxNo = Math.max(...orderNoList);
  }
  body.po_num = maxNo + 1;
  orderList = [...orderList, body];
  console.log("new order saved successfully");
  res.send(body);
});
app.put("/updateOrder/:po_num", function (req, res) {
  console.log("I am from updateOrder");
  const { body, params, query } = req; //object destructuring
  console.log("body: ", body);
  console.log("params: ", params);
  console.log("query: ", query);
  let orderIndex = orderList.findIndex((ele) => ele.po_num == params.po_num);
  console.log("orderIndex: ", orderIndex);
  orderList.splice(orderIndex, 1, body);
  
  res.send("Record updated successfully.");
});
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

var orderList = [
  {
    po_num: "po123",
    date: "22 / 10 / 2011",
    total_amt: 12000,
    user_name: "Snehal",
    desc: "I am snehal",
    state: "Karnataka",
    city: "Belgaum",
  },
  {
    po_num: "po456",
    date: "21 / 15 / 2011",
    total_amt: 12500,
    user_name: "Pranay",
    desc: "I am Pranay",
    state: "Maharashtra",
    city: "Mumbai",
  },
  {
    po_num: "po789",
    date: "22 / 09 / 2022",
    total_amt: 23000,
    user_name: "Ganesh",
    desc: "I am Ganesh",
    state: "Karnataka",
    city: "Dharwad",
  },
  {
    po_num: "po563",
    date: "15 / 10 / 2016",
    total_amt: 52000,
    user_name: "Sarthak",
    desc: "I am Sarthak",
    state: "Karnataka",
    city: "Belgaum",
  },
];
