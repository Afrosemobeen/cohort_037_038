const { set } = require('mongoose');
var Nav = require('../models/nav');
var hu = require('../models/usermodel');

// get nav list with only select ture
exports.getnavlist = function(req, res){
    console.log('form get nav servies ');
    Nav.find().where({select: true})
    .select({_id:0}).exec(function(err, result){
        res.send(result);
    })
}

// get nav list full
exports.getnavlistfornavedit = function(req, res){
    console.log('form get nav servies ');
    Nav.find().where({})
    .select({_id:0}).exec(function(err, result){
        res.send(result);
    })
}
// get user data for header
exports.userdataforheader = function(req, res){
    console.log('get user data for header');
    hu.find().exec(function(err, result){
        res.send(result);
    })
}

// update nav list 
exports.updatenavlist =function(req, res){
        console.log('from update nav servies');
        const {body, params, query}= req;
        console.log("body:", body);
        console.log("params:", params);
        console.log("query:", query);

        req.body.forEach(x => {
            // console.log(x.select)
            // console.log(x.id)
            Nav.updateOne({id:x.id},x)
                .exec(function(err, result){
                        res.write(JSON.stringify(result))
                                            }
                                        )
                                });
        res.end();
            }

