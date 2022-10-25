var mongoose = require('../dbs/navdb');
// step 1 create schema 
var navsSchema = new mongoose.Schema({
        id: Number,
        name: String,
        url: String,
        select: Boolean,

    
}, {
    versionKey: false,
})
// var userSchema = new mongoose.Schema({
//         username:String,
//         name: String,
//         title: String,
    
// }, {
//     versionKey: false,
// });


var Nav = mongoose.model("navitems", navsSchema);
// var hu = mongoose.model("userdatas", userSchema);

module.exports = Nav;
// module.exports = hu;