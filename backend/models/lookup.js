var mongoose = require("../db/db");

var lookupSchema = new mongoose.Schema(
  {
    lookup_value: String,
    status: String,
    lookup_type: String,
  },
  {
    versionKey: false,
  }
);

var Lookup = mongoose.model("lookups", lookupSchema);

module.exports = Lookup;
