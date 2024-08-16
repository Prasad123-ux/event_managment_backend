const mongoose = require("mongoose")

const clientSchema= new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
   
    role:{
        type:String,
        enum:["Client","Vendor","Admin"],
        default:"Client"
    }

},{timestamps:true})

const ClientData= mongoose.model('ClientData',clientSchema)
module.exports={ClientData}