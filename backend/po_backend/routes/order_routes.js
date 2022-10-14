var express = require("express");

var router = express.Router();

const { Router } = require("express");

router.get("/orders", function (req, res) {
    console.log("I am from getallorders");
    res.send(orderList);
  });
  
  router.post("/orders", function (req, res) {
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
  
  router.put("/orders/:po_num", function (req, res) {
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
  var orderList = [
    {
      po_num: "100",
      date: "22 / 10 / 2011",
      total_amt: 12000,
      user_name: "Snehal",
      desc: "I am snehal",
      state: "Karnataka",
      city: "Belgaum",
    },
    {
      po_num: "101",
      date: "21 / 15 / 2011",
      total_amt: 12500,
      user_name: "Pranay",
      desc: "I am Pranay",
      state: "Maharashtra",
      city: "Mumbai",
    },
    {
      po_num: "102",
      date: "22 / 09 / 2022",
      total_amt: 23000,
      user_name: "Ganesh",
      desc: "I am Ganesh",
      state: "Karnataka",
      city: "Dharwad",
    },
    {
      po_num: "103",
      date: "15 / 10 / 2016",
      total_amt: 52000,
      user_name: "Sarthak",
      desc: "I am Sarthak",
      state: "Karnataka",
      city: "Belgaum",
    },
  ];
  module.exports=router