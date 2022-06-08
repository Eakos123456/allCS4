var mongoose = require("mongoose");

var Data = mongoose.model("Info",{
    grade: Number,
    name: {
    	required:true,
    	unique:true,
    	type:String
    }
});

//var Data = mongoose.model("Info",{
//    ident: Number,
//    name: String
//});


module.exports = Data;