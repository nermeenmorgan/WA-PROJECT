const mongoose = require("mongoose");
const clientDetailsSchema = new mongoose.Schema(
    {
        fname: String,
        lname:String,
        email:{type:String, unique:true
    },
        password:String
    },{
        collection:"clientInfo"
    });
mongoose.model("clientInfo", clientDetailsSchema)