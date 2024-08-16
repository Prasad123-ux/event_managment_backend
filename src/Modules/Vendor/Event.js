const { mongoose } = require("../../Config/db");

const eventSchema= mongoose.Schema({
    eventName:{
        type:String,
        required:true
    },
    eventDate:{
        type:Date,
        required:true

    },
    eventDescription:{
        type:String,
        required:true
    },
    media:[String],
    role:{
        type:String,
        enum:["vendor",'client','admin'],
        default:"vendor"
    }

    
},{timestamps:true})

const EventData= mongoose.model("EventData",eventSchema)

module.exports={EventData}