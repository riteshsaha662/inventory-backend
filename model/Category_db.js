const mongoose = require('mongoose');
const catsc= mongoose.Schema({
    "categoryName": String
});

module.exports=mongoose.model("Category",catsc)