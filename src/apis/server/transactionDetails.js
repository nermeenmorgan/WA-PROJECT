const mongoose = require("mongoose");
const transactionSchema = new mongoose.Schema(
    {
        id: Number,
         user_id: Number,
         amount:Number,
          trans_id:Number, 
        payment_token:Number,
         status:String,
    },{
        collection:"transactionInfo"
    });
mongoose.model("transactionInfo", transactionSchema)