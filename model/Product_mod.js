const mongoose = require('mongoose');
const prc= mongoose.Schema({
    "category": mongoose.Types.ObjectId,
    "pname": String,
    "pprice": Number,
    "pimg": String,
    "pd": String
});

module.exports=mongoose.model("Product",prc);