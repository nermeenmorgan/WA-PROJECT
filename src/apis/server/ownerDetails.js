const mongoose = require("mongoose");
const ownerDetailsSchema = new mongoose.Schema(
    {
        name: String,
        phone:Number,
        email:{type: String, unique:true},
        password:String
    },{
        collection:"ownerInfo"
    });
mongoose.model("ownerInfo", ownerDetailsSchema)