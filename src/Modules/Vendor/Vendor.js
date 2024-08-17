 const mongoose= require('mongoose')
// const {mongoose} = require('../../Config/db')

const vendorSchema= mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true,
    },
    role:{
        type:String,
        enum:["vendor",'client','admin'],
        default:"vendor"
    }
},{timeseries:true,timestamps:true})

const VendorData= mongoose.model("VendorData",vendorSchema)

module.exports={VendorData}