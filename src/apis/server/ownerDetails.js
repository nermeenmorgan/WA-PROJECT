const mongoose = require("mongoose");
const ownerDetailsSchema = new mongoose.Schema(
    {
        fname: String,
        lname:String,
        email:{type: String, unique:true},
        password:String
    },{
        collection:"ownerInfo"
    });
mongoose.model("ownerInfo", ownerDetailsSchema)