var mongoose = require("../db/db_lookups");

// step 1 : create schema
var stateSchema = new mongoose.Schema(
  {
    lookup_value: String,
    state: String,
    lookup_type: String,
  },
  {
    versionKey: false,
  }
);

//step 2 : create modal
var State = mongoose.model("lookups", stateSchema);

module.exports = State;
