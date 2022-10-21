var mongoose = require("../db/db");

// step 1 : create schema
var orderSchema = new mongoose.Schema(
  {
    po_num: String,
    date: String,
    total_amt: String,
    username: String,
    desc: String,
    state: String,
    city: String,
  },
  {
    versionKey: false,
  }
);

var lookupSchema = new mongoose.Schema(
  {
    lookup_value: String ,
    status: String,
    lookup_type: String
  },
  {
    versionKey: false,
  }
);

//step 2 : create modal
var Order = mongoose.model("orders", orderSchema);

module.exports = Order;

var Lookup = mongoose.model("lookup", lookupSchema);


module.exports = Lookup;
