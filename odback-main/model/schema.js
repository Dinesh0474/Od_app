const mongoose= require("mongoose")

const requesterss= new mongoose.Schema({
    sid:{type:String,unique:true,required:true},
    sname:{type:String,required:true},
    sreason:{type:String,required:true},
    slot:{type:Number,required:true},
    slot1:{type:Boolean,required:true},
    slot2:{type:Boolean,required:true},
    slot3:{type:Boolean,required:true},
    status:{type:Number,required:true},
})

const requesters= mongoose.model("requesters",requesterss)

module.exports=requesters

// status:4