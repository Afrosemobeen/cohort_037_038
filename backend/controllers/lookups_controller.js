const Lookup = require("../models/lookup");

exports.getLookups = function (req, res) {
  console.log("from getlookups service");
  const { body, params, query } = req;
  console.log("body: ", body);
  console.log("params: ", params);
  console.log("query: ", query);
  Lookup.find()
    .where({ lookup_type: params.lookup_type })
    .exec(function (err, result) {
      res.send(result);
    });
};

// exports.createLookup = function(req,res){
//     console.log("from createLookup service");
//     const {body, params, query} = req
//     console.log("body: ", body);
//     console.log("params: ", params);
//     console.log("query: ", query);

//     const lookupObj = new Lookup(body);
//     lookupObj.save(function(err,result){
//       res.send(result);
//     })
// }

// exports.updateLookup = function(req,res){
//     console.log("from updateLookup service");
//     const {body, params, query} = req
//     console.log("body: ", body);
//     console.log("params: ", params);
//     console.log("query: ", query);

//     Lookup.updateOne({_id: params._id}, body).exec(function(err,result){
//       res.send(result)
//     })

// }

// exports.deleteLookup = function(req,res){
//     console.log("from deleteLookup service");
//     const {body, params, query} = req
//     console.log("body: ", body);
//     console.log("params: ", params);
//     console.log("query: ", query);

//     Lookup.deleteOne({_id: params._id}).exec(function(err, result){
//       res.send(result)
//     })
//   }
